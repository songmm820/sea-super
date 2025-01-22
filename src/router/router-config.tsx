/**
 * Router List Config
 * @author SongMM
 */

import { createBrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'

const modules = import.meta.glob('@/views/*/*.tsx') // 导入

console.log(modules)

function LazyComponent({ component }: { component: string }) {
  const url = component.replace('@', '../')
  const Component = lazy(() => import(url))
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <LazyComponent component={'@/views/Home/HomeView'} />
    // loader: () => {
    //   return Promise.resolve(true)
    // }
  }
])

export default router
