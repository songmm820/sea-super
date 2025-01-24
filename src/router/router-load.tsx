import React, { LazyExoticComponent, Suspense } from 'react'
import FullScreenLoading from '@/components/Loading/FullScreenLoading'
import PermissionRouter from '@/components/PermissionRouter/PermissionRouter.tsx'

interface ILazyImportComponentProps {
  lazyChildren: LazyExoticComponent<() => React.ReactNode>
  isRequiredAuth: boolean
  title?: string
}

/**
 * Lazy Import Component *  Must in [views] Folder
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
