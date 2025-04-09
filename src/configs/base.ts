// 类型：插件分组
import { ImageCompressionInstance } from '@/configs/media-handle/image-compression.ts'

export interface PluginGroup {
  /**
   * 插件分组名称
   */
  name: string
  /**
   * 插件分组图标
   */
  icon?: string
  /**
   * 插件分组描述信息
   */
  description?: string
  /**
   * 插件列表
   */
  plugins: BasePlugin[]
}

// 类型：插件基础信息
export interface BasePlugin {
  /**
   * 插件名称
   */
  name: string
  /**
   * 插件版本
   */
  version: string
  /**
   * 插件图标
   */
  icon?: string
  /**
   * 插件描述信息
   */
  description?: string
}

// 插件分组列表
export const pluginGroups: PluginGroup[] = [
  {
    name: '媒体处理',
    plugins: [ImageCompressionInstance]
  }
]
