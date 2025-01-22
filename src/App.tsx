/**
 * App Entry Point
 * @author SongMM
 */

import { RouterProvider } from 'react-router-dom'
import { App as AppProvider } from 'antd'
import router from './router/router-config'

function App() {
  return (
    <AppProvider className='h-full w-full'>
      <RouterProvider router={router} />
    </AppProvider>
  )
}

export default App
