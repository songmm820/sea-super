/**
 * App Entry Point
 * @author songmm
 */

import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { useAtom } from 'jotai'
import { App as AppProvider } from 'antd'
import router from './router/router-config'
import { updateScreenSizeAtom } from '@/jotai-atoms/app-store'
import _ from 'lodash'

function App() {
  const [, updateScreenSize] = useAtom(updateScreenSizeAtom)

  /**
   * 监听窗口大小变化
   */
  const handleResize = () => {
    const newWidth = window.innerWidth
    const newHeight = window.innerHeight
    updateScreenSize({ screenWidth: newWidth, screenHeight: newHeight })
  }

  useEffect(() => {
    // 监听窗口大小变化
    window.addEventListener('resize', _.debounce(handleResize, 300))
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <AppProvider className='h-full w-full overflow-auto'>
      <RouterProvider router={router} />
    </AppProvider>
  )
}

export default App
