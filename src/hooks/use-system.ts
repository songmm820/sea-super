import { useEffect, useState } from 'react'

/**
 * 获取当前网络状态
 */
export function useNetworkStatus() {
  const [networkStatus, setNetworkStatus] = useState({})

  return { networkStatus }
}
