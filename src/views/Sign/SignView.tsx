/**
 * Views：登录界面
 * @author songmm
 */

import { useAtomValue } from 'jotai'
import { appStateAtom } from '@/jotai-atoms/app-store'
import useTheme from '@/hooks/use-theme'

function SignView() {
  // 获取APP原子信息
  const appInfoAtom = useAtomValue(appStateAtom)
  const { theme, setTheme } = useTheme()

  const toggleDarkMode = () => {
    setTheme('dark')
  }

  return (
    <div className='h-full flex flex-col items-center justify-center bg-white'>
      <div className='text-primary'>{JSON.stringify(appInfoAtom)}</div>

      <p />
      <div>{theme}</div>
      <button onClick={toggleDarkMode}>切换暗色模式</button>
    </div>
  )
}

export default SignView
