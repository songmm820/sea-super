/**
 * Permission Router
 * @author SongMM
 */

import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NoPermissionView from '@/views/Error/NoPermissionView.tsx'

interface IPermissionRouterProps {
  children: React.ReactNode
  isRequiredAuth: boolean
  title?: string
}

const DEFAULT_TITLE_PREFIX = 'LetsPlay '
const DEFAULT_TITLE = '玩吧'

export function PermissionRouter({
  children,
  isRequiredAuth = true,
  title = DEFAULT_TITLE
}: IPermissionRouterProps) {
  const navigate = useNavigate() // Hook for navigation

  useEffect(() => {
    document.title = `${DEFAULT_TITLE_PREFIX + title}`
    if (isRequiredAuth) {
      const localData = localStorage.getItem('user')
      if (!localData) {
        // If no user data, redirect to login page
        navigate('/sign')
      }
    }
  }, [isRequiredAuth, title, navigate])

  if (isRequiredAuth && !localStorage.getItem('user')) {
    // If still no user data, show the NoPermissionView
    return <NoPermissionView />
  }
  return <>{children}</>
}

export default PermissionRouter
