/**
 * Router List Config
 * @author SongMM
 */

import { createBrowserRouter } from 'react-router-dom'
import { LazyImportComponent } from './router-load'
import { lazy } from 'react'

const HomeView = lazy(() => import('@/views/Home/HomeView'))
const NotFoundView = lazy(() => import('@/views/Error/NotFoundView'))

const router = createBrowserRouter([
  // Home
  {
    path: '/',
    element: (
      <LazyImportComponent lazyChildren={HomeView} isRequiredAuth={false} />
    ),
    loader: () => {
      return Promise.resolve(true)
    }
  },
  // 404 Not Found
  {
    path: '*',
    element: (
      <LazyImportComponent lazyChildren={NotFoundView} isRequiredAuth={false} />
    )
  }
])

export default router
