/**
 * Views：Home Main
 * @author songmm
 */

import { CSSProperties } from 'react'
import Groups from '@/views/PluginGroups/Groups.tsx'

function DashboardMain() {
  const styls: CSSProperties = {
    backgroundImage: 'linear-gradient(0deg, #d5eaff, #fff)'
  }

  // 背景图区域
  const Banner = () => {
    return (
      <div className='relative h-[260px]' style={styls}>
        <div className='absolute top-[100px] left-[50px] '></div>
      </div>
    )
  }

  return (
    <>
      <div className='relative'>
        <Banner />
        <div className='absolute w-full flex flex-col items-center justify-center top-[90%]'>
          <Groups />
          <div>插件列表</div>
        </div>
      </div>
    </>
  )
}

export default DashboardMain
