/// <reference types="vite/client" />

// 环境变量类型声明
interface ImportMetaEnv {
  readonly VITE_SECOND_DEPLOY_DIR: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
