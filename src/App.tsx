/**
 * App Entry Point
 * @author songmm
 */

import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { useAtom } from 'jotai'
import { updateScreenWHAtom } from '@/jotai-atoms/app-store.ts'
import { App as AppProvider } from 'antd'
import router from './router/router-config'

function App() {
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
      <RouterProvider router={router} />
    </AppProvider>
  )
}

export default App
