export interface ZennArticle {
  title: string;
  url: string;
  publishedAt: Date;
  tags: string[];
  description?: string;
  imageUrl?: string;
}

const ZENN_USERNAME = 'mizl';
const RSS_URL = `https://zenn.dev/${ZENN_USERNAME}/feed`;

function extractTagValues(xml: string): string[] {
  const tags: string[] = [];
  const categoryPattern = /<category>(.*?)<\/category>/g;
  let match;
  while ((match = categoryPattern.exec(xml)) !== null) {
    tags.push(match[1].trim());
  }
  return tags;
}

function extractItemXml(feedXml: string): string[] {
  const items: string[] = [];
  const itemPattern = /<item>([\s\S]*?)<\/item>/g;
  let match;
  while ((match = itemPattern.exec(feedXml)) !== null) {
    items.push(match[1]);
  }
  return items;
}

function extractText(itemXml: string, tag: string): string {
  const pattern = new RegExp(`<${tag}(?:[^>]*)>(?:<!\\[CDATA\\[)?(.*?)(?:\\]\\]>)?<\\/${tag}>`, 's');
  const match = pattern.exec(itemXml);
  return match ? match[1].trim() : '';
}

function extractEnclosureUrl(itemXml: string): string | undefined {
  const match = /<enclosure[^>]+url="([^"]+)"/.exec(itemXml);
  return match ? match[1] : undefined;
}

function parseItem(itemXml: string): ZennArticle | null {
  const title = extractText(itemXml, 'title');
  const url = extractText(itemXml, 'link') || extractText(itemXml, 'guid');
  const pubDateStr = extractText(itemXml, 'pubDate');
  const description = extractText(itemXml, 'description') || undefined;
  const tags = extractTagValues(itemXml);
  const imageUrl = extractEnclosureUrl(itemXml);

  if (!title || !url) return null;

  const publishedAt = pubDateStr ? new Date(pubDateStr) : new Date(0);

  return { title, url, publishedAt, tags, description, imageUrl };
}

/**
 * 取得に失敗したときにビルドを止めるかどうか。
 *
 * サイトは静的ビルドなので、取得に失敗したまま進むと記事一覧が空のページが
 * デプロイされてしまう。CI（GitHub Actions は CI=true を設定する）では例外を
 * 投げてビルドを失敗させ、前回デプロイ済みのサイトをそのまま残す。
 * ローカルではオフラインでも開発できるよう、警告を出して空の一覧で続ける。
 * ZENN_FETCH_STRICT=true / false で明示的に切り替えられる。
 */
function isStrict(): boolean {
  const override = process.env.ZENN_FETCH_STRICT;
  if (override !== undefined && override !== '') return override === 'true';
  return Boolean(process.env.CI) && process.env.CI !== 'false';
}

function handleFailure(message: string, cause?: unknown): ZennArticle[] {
  if (isStrict()) {
    throw new Error(`[zenn] ${message}`, { cause });
  }
  console.warn(`[zenn] ${message}`, ...(cause === undefined ? [] : [cause]));
  return [];
}

export async function fetchZennArticles(): Promise<ZennArticle[]> {
  let response: Response;
  let xml: string;
  try {
    response = await fetch(RSS_URL);
    xml = await response.text();
  } catch (err) {
    return handleFailure(`RSS fetch error (${RSS_URL})`, err);
  }
  if (!response.ok) {
    return handleFailure(`RSS fetch failed: ${response.status} ${response.statusText} (${RSS_URL})`);
  }

  const articles = extractItemXml(xml)
    .map(parseItem)
    .filter((a): a is ZennArticle => a !== null);

  // 公開済みの記事があるので、0件はフィードの形式変更などの異常とみなす。
  if (articles.length === 0) {
    return handleFailure(`RSS contained no articles (${RSS_URL})`);
  }
  return articles;
}
