/**
 * Auth 工具
 * @author songmm
 */

import { LocalStorageUtil } from './storage-util'
import { AUTH_SIGN_KEY } from '@/constants/auth'

/**
 * 设置用户本地认证token信息
 */
export function setAuth(auth: string): void {
  LocalStorageUtil.set(AUTH_SIGN_KEY, auth)
}

/**
 * 获取用户本地认证token信息
 */
export function getAuth(): string | null {
  return LocalStorageUtil.get(AUTH_SIGN_KEY)
}
