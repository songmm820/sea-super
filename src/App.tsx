/**
 * App Entry Point
 * @author SongMM
 */

import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { useAtom } from 'jotai'
import { appInfoAtom, updateScreenWHAtom } from '@/jotai-atoms/app-store.ts'
import { App as AppProvider } from 'antd'
import router from './router/router-config'

function App() {
  const [appInfo] = useAtom(appInfoAtom)
  const [, updateScreen] = useAtom(updateScreenWHAtom)

  /**
   * 监听窗口大小变化
   */
  function handleResize() {
    const newWidth = window.innerWidth
    const newHeight = window.innerHeight
    updateScreen({
      screenWidth: newWidth,
      screenHeight: newHeight
    })
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <AppProvider className='h-full w-full'>
      {JSON.stringify(appInfo)}
      <RouterProvider router={router} />
    </AppProvider>
  )
}

export default App
