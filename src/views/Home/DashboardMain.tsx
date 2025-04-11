/**
 * Views：Home Main
 * @author songmm
 */

import { CSSProperties, useState } from 'react'
import Groups from '@/views/PluginGroups/Groups.tsx'
import { PluginGroup } from '@/configs/base.ts'
import Plugins from '@/views/PluginGroups/Plugins.tsx'

function DashboardMain() {
  // 当前选择的分组
  const [currentGroup, setCurrentGroup] = useState<PluginGroup>()

  // 插件分组css
  const styles: CSSProperties = {
    backgroundImage: 'linear-gradient(0deg, #d5eaff, #fff)'
  }

  // 背景图区域
  const Banner = () => {
    return (
      <div className='relative h-[260px]' style={styles}>
        <div className='absolute top-[100px] left-[50px] '></div>
      </div>
    )
  }

  // 选中分组
  const handleSelectGroup = (group: PluginGroup) => {
    setCurrentGroup(group)
  }

  return (
    <>
      <div className='relative'>
        <Banner />
        <div className='absolute w-full flex flex-col items-center justify-center top-[90%]'>
          <Groups onSelectGroup={handleSelectGroup} />
          {/* 插件列表 */}
          <div className='mt-[24px]'>
            {currentGroup && <Plugins group={currentGroup} />}
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardMain
