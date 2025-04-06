import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/styles/main.css'
import '@/styles/style.css'
import App from '@/App'
import { ConfigProvider } from '@arco-design/web-react'
import { Toaster } from 'react-hot-toast'
// 自动更新脚本
import '@/utils/auto-update.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider size='large' autoInsertSpaceInButton>
      <App />
    </ConfigProvider>
    <Toaster />
  </React.StrictMode>
)
