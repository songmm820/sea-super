/**
 * Views：创建使用抽屉
 * @author songmm
 */

import { Drawer } from '@arco-design/web-react'
import { BasePlugin } from '@/configs/base.ts'

interface IPluginUsedDrawerProps {
  /* 抽屉开关 */
  visible: boolean
  /* 抽屉取消事件 */
  onCancel?: () => void
  /* 抽屉确定事件 */
  onOk?: () => void
  /* 插件 */
  plugin: BasePlugin
}

function PluginUsedDrawer(props: IPluginUsedDrawerProps) {
  const { visible, plugin, onOk, onCancel } = props

  // 抽屉确定事件
  const handleOk = () => {
    onOk?.()
  }

  // 抽屉取消事件
  const handleCancel = () => {
    onCancel?.()
  }

  return (
    <>
      <Drawer
        title={plugin.name}
        visible={visible}
        placement='bottom'
        height={'85%'}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {plugin.render()}
      </Drawer>
    </>
  )
}

export default PluginUsedDrawer
