/**
 * App Atoms Store
 * @author SongMM
 */
import { atom } from 'jotai'
import { APP_NAME } from '@/constants/app.ts'
import { getLang, getOS } from '@/utils/system-util.ts'

export const appInfoAtom = atom({
  /* 应用名称 */
  name: APP_NAME,
  /* 屏幕宽度 */
  screenWidth: window.innerWidth,
  /* 屏幕高度 */
  screenHeight: window.innerHeight,
  /* 当前平台 */
  platform: getOS(),
  /* 当前语言 */
  language: getLang()
})

/**
 * 更新屏幕宽度和高度
 */
export const updateScreenWHAtom = atom(
  (get) => get(appInfoAtom),
  (
    get,
    set,
    {
      screenWidth,
      screenHeight
    }: {
      screenWidth: number
      screenHeight: number
    }
  ) => {
    set(appInfoAtom, { ...get(appInfoAtom), screenWidth, screenHeight })
  }
)
