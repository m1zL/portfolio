export type SkillCategory = 'language' | 'framework' | 'database' | 'infrastructure' | 'tool';
export type SkillLevel = 'expert' | 'proficient' | 'familiar';

export interface Skill {
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  yearsOfExperience: number;
  featured: boolean;
  description?: string;
  canDo?: string[];
}

export const CATEGORY_LABELS: Record<SkillCategory, string> = {
  language: 'Language',
  framework: 'Framework',
  database: 'Database',
  infrastructure: 'Infrastructure',
  tool: 'Tool',
};

// カテゴリの表示順
export const CATEGORY_ORDER: SkillCategory[] = [
  'language',
  'framework',
  'database',
  'infrastructure',
  'tool',
];

// 習熟度の段階（ドットの数）。3 が最も高い
export const LEVEL_RANK: Record<SkillLevel, number> = {
  expert: 3,
  proficient: 2,
  familiar: 1,
};

export const LEVEL_MAX = 3;

export const LEVEL_ORDER: SkillLevel[] = ['expert', 'proficient', 'familiar'];

export const LEVEL_DESCRIPTION: Record<SkillLevel, string> = {
  expert: '実務で深く使用・チームへの技術指導が可能',
  proficient: '実務で継続的に使用・一人で完結できる',
  familiar: '実務経験あり・補助的に使用',
};

export const skills: Skill[] = [
  // Language
  {
    name: 'PHP',
    category: 'language',
    level: 'expert',
    yearsOfExperience: 7,
    featured: true,
    description: 'メインの開発言語。Laravel と組み合わせて大規模バックエンドを構築。',
    canDo: ['RESTful API 設計・実装', 'Composer による依存管理', 'PHPUnit でのテスト駆動開発'],
  },
  {
    name: 'SQL',
    category: 'language',
    level: 'proficient',
    yearsOfExperience: 7,
    featured: true,
    description: '複雑なクエリ設計・パフォーマンスチューニングが得意。',
    canDo: ['複雑な JOIN クエリ最適化', 'インデックス設計', 'ウィンドウ関数・CTE 活用'],
  },
  {
    name: 'Python',
    category: 'language',
    level: 'familiar',
    yearsOfExperience: 2,
    featured: false,
    description: 'データ処理・スクリプト自動化・API連携に活用。',
    canDo: ['データ処理スクリプト', 'API 連携', 'バッチ処理自動化'],
  },

  // Framework
  {
    name: 'Laravel',
    category: 'framework',
    level: 'expert',
    yearsOfExperience: 7,
    featured: true,
    description: 'PHP フレームワーク。大規模 Web アプリケーション開発の主軸として使用。',
    canDo: ['Eloquent ORM 活用', 'マイグレーション管理', 'ミドルウェア・サービスコンテナ設計'],
  },

  // Database
  {
    name: 'MySQL',
    category: 'database',
    level: 'expert',
    yearsOfExperience: 7,
    featured: true,
    description: '主力データベース。大規模テーブル設計・パフォーマンスチューニングを担当。',
    canDo: ['テーブル設計・正規化', 'インデックス最適化', 'レプリケーション構築'],
  },
  {
    name: 'Redis',
    category: 'database',
    level: 'proficient',
    yearsOfExperience: 5,
    featured: true,
    description: 'キャッシュ・セッション管理・キューイングに使用。',
    canDo: ['キャッシュ戦略設計', 'セッション管理', 'Pub/Sub によるメッセージング'],
  },
  {
    name: 'OpenSearch',
    category: 'database',
    level: 'familiar',
    yearsOfExperience: 2,
    featured: false,
    description: '全文検索基盤の構築・運用。商品検索・ログ分析に活用。',
    canDo: ['全文検索インデックス設計', 'アグリゲーション', 'Kibana ダッシュボード'],
  },

  // Infrastructure
  {
    name: 'AWS',
    category: 'infrastructure',
    level: 'proficient',
    yearsOfExperience: 5,
    featured: true,
    description: 'インフラ設計・運用。EC2, RDS, S3, Lambda 等を業務で使用。',
    canDo: ['EC2 / RDS 構築・運用', 'S3 ストレージ設計', 'Lambda 関数開発'],
  },
  {
    name: 'GitLab CI/CD',
    category: 'infrastructure',
    level: 'proficient',
    yearsOfExperience: 5,
    featured: false,
    description: 'CI/CD パイプラインの設計・実装。自動テスト・デプロイを構築。',
    canDo: ['パイプライン構築', '自動テスト・Lint', 'ステージング/本番デプロイ自動化'],
  },

  // Tool
  {
    name: 'Git',
    category: 'tool',
    level: 'expert',
    yearsOfExperience: 7,
    featured: false,
    description: 'チーム開発でのブランチ戦略設計・コードレビューを主導。',
    canDo: ['ブランチ戦略設計', 'コードレビュー', 'コンフリクト解消'],
  },
  {
    name: 'PHPUnit',
    category: 'tool',
    level: 'proficient',
    yearsOfExperience: 5,
    featured: true,
    description: 'PHP 用テストフレームワーク。ユニット・統合テストを実装。',
    canDo: ['ユニットテスト実装', 'モック・スタブ活用', 'カバレッジ管理'],
  },
  {
    name: 'Pest',
    category: 'tool',
    level: 'familiar',
    yearsOfExperience: 1,
    featured: false,
    description: 'モダンな PHP テストフレームワーク。簡潔な記法でテストを実装。',
    canDo: ['宣言的テスト記述', 'アーキテクチャテスト', '並列テスト実行'],
  },
];
