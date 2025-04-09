// 类型：插件分组
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
   * 子插件列表
   */
  plugins: string[]
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
