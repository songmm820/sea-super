import React, { LazyExoticComponent, Suspense } from 'react'
import FullScreenLoading from '@/components/Loading/FullScreenLoading'
import NoPermissionView from '@/views/Error/NoPermissionView'

const DEFAULT_TITLE_PREFIX = 'LetsPlay '
const DEFAULT_TITLE = '玩吧'

interface ILazyImportComponentProps {
  lazyChildren: LazyExoticComponent<() => React.ReactNode>
  isRequiredAuth: boolean
  title?: string
}

/**
 * Lazy Import Component
 * Component Must in [views] Folder
 */
export const LazyImportComponent = (props: ILazyImportComponentProps) => {
  return (
    <Suspense fallback={<FullScreenLoading />}>
      <PermissionRouter
        isRequiredAuth={props.isRequiredAuth}
        title={props.title}
      >
        <props.lazyChildren />
      </PermissionRouter>
    </Suspense>
  )
}

interface IPermissionRouterProps {
  children: React.ReactNode
  isRequiredAuth: boolean
  title?: string
}

/**
 * Permission Router
 */
export function PermissionRouter({
  children,
  isRequiredAuth = true,
  title = DEFAULT_TITLE
}: IPermissionRouterProps) {
  document.title = `${DEFAULT_TITLE_PREFIX + title}`
  if (isRequiredAuth) {
    // @TODO: Check User Auth
    return <NoPermissionView />
  } else {
    return <>{children}</>
  }
}
