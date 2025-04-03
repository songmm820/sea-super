/**
 * Views：登录界面
 * @author songmm
 */

import { useAtomValue } from 'jotai'
import { appStateAtom } from '@/jotai-atoms/app-store'

function SignView() {
  // 获取APP原子信息
  const appInfoAtom = useAtomValue(appStateAtom)

  return (
    <div className='h-full flex items-center justify-center'>
      {JSON.stringify(appInfoAtom)}
    </div>
  )
}

export default SignView
