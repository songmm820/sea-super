import React, { LazyExoticComponent, Suspense } from 'react'
import FullScreenLoading from '@/components/Loading/FullScreenLoading'
import NoPermissionView from '@/views/Error/NoPermissionView'

interface ILazyImportComponentProps {
  lazyChildren: LazyExoticComponent<() => React.ReactNode>
  isRequiredAuth: boolean
}

/**
 * Lazy Import Component
 * Component Must in [views] Folder
 */
export const LazyImportComponent = (props: ILazyImportComponentProps) => {
  return (
    <Suspense fallback={<FullScreenLoading />}>
      <PermissionRouter isRequiredAuth={props.isRequiredAuth}>
        <props.lazyChildren />
      </PermissionRouter>
    </Suspense>
  )
}

interface IPermissionRouterProps {
  children: React.ReactNode
  isRequiredAuth: boolean
}
/**
 * Permission Router
 */
export function PermissionRouter({
  children,
  isRequiredAuth = true
}: IPermissionRouterProps) {
  if (isRequiredAuth) {
    // TODO: Check User Auth
    return <NoPermissionView />
  } else {
    return <>{children}</>
  }
}
