<pre>
src/
├── assets/          # 画像、フォント、スタイルなどの静的アセット
│   ├── images/      # 画像
│   ├── styles/      # グローバルCSSやSCSS
│   └── fonts/       # カスタムフォント
├── components/      # 再利用可能なUIコンポーネント
│   ├── Button.tsx   # 例: ボタンコンポーネント
│   ├── Header.tsx   # 例: ヘッダーコンポーネント
│   └── ...
├── features/        # 特定の機能やドメインロジックに関連するコード
│   ├── auth/        # 例: 認証関連
│   │   ├── LoginForm.tsx
│   │   ├── authSlice.ts
│   │   └── hooks.ts
│   └── dashboard/   # 例: ダッシュボード関連
├── hooks/           # カスタムHooks
│   └── useAuth.ts   # 例: 認証状態を管理するカスタムフック
├── layouts/         # レイアウトコンポーネント
│   ├── MainLayout.tsx
│   └── AuthLayout.tsx
├── pages/           # ページコンポーネント
│   ├── Home.tsx     # ホームページ
│   ├── Login.tsx    # ログインページ
│   └── NotFound.tsx # 404ページ
├── redux/           # Redux関連
│   ├── store.ts     # Reduxストア
│   └── slices/      # Reduxのスライス
│       ├── authSlice.ts
│       └── userSlice.ts
├── routes/          # ルーティング設定
│   └── AppRoutes.tsx
├── services/        # APIクライアントや外部サービスとの通信ロジック
│   ├── apiClient.ts
│   └── authService.ts
├── utils/           # ユーティリティ関数
│   ├── formatDate.ts
│   └── validateEmail.ts
├── App.tsx          # アプリのエントリーポイント
├── index.tsx        # ReactDOMレンダリングのエントリーポイント
├── react-app-env.d.ts # TypeScript用型定義
└── types/           # 型定義（カスタム型やインターフェース）
    ├── auth.d.ts
    └── common.d.ts
</pre>
