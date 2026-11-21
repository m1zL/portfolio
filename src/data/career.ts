export interface CareerProject {
  name: string;
  description: string;
  role: string;
  teamSize?: number;
  technologies?: string[];
  achievements?: string[];
}

export interface CareerHistory {
  id: string;
  /** 業種（例: "Web系事業会社"）。社名は書かない */
  industry: string;
  /** どんなサービスに携わったかの抽象的な説明。固有名詞は書かない */
  service: string;
  role: string;
  /** 開始年月 "YYYY-MM" */
  startDate: string;
  /** 終了年月 "YYYY-MM"。省略した場合は現職とみなす */
  endDate?: string;
  description: string;
  achievements: string[];
  technologies: string[];
  projects?: CareerProject[];
}

export const career: CareerHistory[] = [
  {
    id: 'career-2',
    industry: 'Web系事業会社',
    service: '自社のWebサービスを開発',
    role: 'ソフトウェアエンジニア',
    startDate: '2026-07',
    description: '',
    achievements: [],
    technologies: ['Ruby', 'Ruby on Rails', 'TypeScript', 'React', 'Next.js', 'Google Cloud', 'Firebase', 'Vercel', 'Docker'],
  },
  {
    id: 'career-1',
    industry: 'Web系事業会社',
    service: '事業者と利用者をつなぐ自社のWebプラットフォームを開発',
    role: 'バックエンドエンジニア',
    startDate: '2019-04',
    endDate: '2026-03',
    description:
      '自社Webプラットフォームのバックエンド開発を担当。DDD/クリーンアーキテクチャを用いたフルリニューアルから収益直結の機能・外部API基盤の開発まで幅広く経験。',
    achievements: [],
    technologies: ['PHP', 'Laravel', 'Python', 'MySQL', 'Redis', 'OpenSearch', 'AWS', 'GitLab CI/CD'],
    projects: [
      {
        name: '外部API基盤の開発',
        description:
          '他サービスとのデータ連携を目的とした外部API基盤の開発を担当。既存内部APIを活用したリソース・認可サーバの設計・実装を担った。',
        role: 'バックエンド',
        technologies: ['PHP', 'Laravel', 'MySQL', 'AWS', 'OAuth2/OIDC'],
        achievements: [],
      },
      {
        name: 'Webサイト自動作成機能の開発',
        description:
          '掲載情報をもとに独自ドメイン対応のWebサイトを自動作成・更新する機能の開発を担当。ドメイン設定からクラウドリソースの自動プロビジョニングをはじめとしたライフサイクルの設計・実装を担った。',
        role: 'バックエンド',
        technologies: ['PHP', 'Laravel', 'AWS', 'AWS SDK for PHP'],
        achievements: [],
      },
      {
        name: '外部サービスへの情報同期機能の開発',
        description:
          '掲載情報を外部のプラットフォームサービスへ同期する機能の開発を担当。自社・外部データ間のマッピングの設計から、手運用を限りなく抑える形での実装を担った。',
        role: 'バックエンド',
        technologies: ['PHP', 'Laravel', '外部サービスAPI', 'MySQL'],
        achievements: [],
      },
      {
        name: '自社Webプラットフォームのフルリニューアル',
        description:
          '自社Webプラットフォームおよび関連社内システムのフルリニューアルにメンバーとして参画。DDD/クリーンアーキテクチャ採用下の環境で複数コンテキスト領域の内部APIの設計・実装を担った。',
        role: 'バックエンド',
        technologies: ['PHP', 'Laravel', 'MySQL', 'Redis', 'DDD', 'クリーンアーキテクチャ', 'BFF'],
        achievements: [],
      },
    ],
  },
];
