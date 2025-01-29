/**
 * App util
 * @author SongMM
 */

import { platform } from '@tauri-apps/plugin-os'

/**
 * Get System OS
 */
export function getOS() {
  try {
    return platform()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return 'web'
  }
}

/**
 * Get System Language
 */
export function getLang() {
  return navigator.language
}
