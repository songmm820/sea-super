/**
 * Views：插件列表
 * @author songmm
 */
import PluginUsedDrawer from '@/views/PluginGroups/PluginUsedDrawer.tsx'
import { useState } from 'react'
import { BasePlugin, PluginGroup } from '@/configs/base.ts'

/* 插件布局方式 */
const LAYOUT_TYPE = {
  /* 网格 */
  GRID: 'GRID',
  /* 列表 */
  LIST: 'LIST',
  /* 蜂窝 */
  WAVE: 'WAVE'
}

type PluginLayout = keyof typeof LAYOUT_TYPE

interface IPluginsProps {
  /* 选中的分组 */
  group?: PluginGroup
  /* 布局方式 */
  layout?: PluginLayout
}

/**
 * 插件布局方式
 * 1. 网格布局
 * 2. 列表布局
 * 3. 蜂窝布局
 */
function Plugins(props: IPluginsProps) {
  const { layout = LAYOUT_TYPE.GRID } = props

  // 当前选中插件
  const [currentPlugin, setCurrentPlugin] = useState<BasePlugin>()

  // 插件使用抽屉开关
  const [pluginUsedDrawerVisible, setPluginUsedDrawerVisible] =
    useState<boolean>(false)

  // 点击插件
  const handleSelectPlugin = (plugin: BasePlugin) => {
    setCurrentPlugin(plugin)
    setPluginUsedDrawerVisible(true)
  }

  // 关闭插件使用抽屉
  const handleClosePluginUsedDrawer = () => {
    setPluginUsedDrawerVisible(false)
  }

  // 网格插件 - item
  const GridItem = (props: { plugin: BasePlugin }) => {
    const { plugin } = props
    return <div>{plugin.name}</div>
  }

  // 插件布局 - 网格布局
  const GridLayout = (props: { plugins?: BasePlugin[] }) => {
    const { plugins = [] } = props
    return (
      <>
        <div className='grid grid-cols-3 gap-[16px]'>
          {plugins.map((plugin, index) => (
            <div key={index} onClick={() => handleSelectPlugin(plugin)}>
              <GridItem key={index} plugin={plugin || []} />
            </div>
          ))}
        </div>
      </>
    )
  }

  // 插件的布局方式
  const PluginLayout = () => {
    return (
      <>
        {LAYOUT_TYPE.GRID === layout && (
          <GridLayout plugins={props.group?.plugins} />
        )}
      </>
    )
  }

  return (
    <>
      <div>
        <PluginLayout />
      </div>
      {currentPlugin && (
        <PluginUsedDrawer
          visible={pluginUsedDrawerVisible}
          plugin={currentPlugin}
          onCancel={handleClosePluginUsedDrawer}
        />
      )}
    </>
  )
}

export default Plugins
