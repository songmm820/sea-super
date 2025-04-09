/**
 * Views：Home Main
 * @author songmm
 */

import { CSSProperties } from 'react'

function DashboardMain() {
  const styls: CSSProperties = {
    backgroundImage: 'linear-gradient(0deg, #d5eaff, #fff)'
  }

  // 立刻开始

  // 背景图区域
  const Banner = () => {
    return (
      <div className='relative h-[620px]' style={styls}>
        <div className='absolute top-[100px] left-[50px] '></div>
      </div>
    )
  }

  return (
    <div>
      <Banner />
    </div>
  )
}

export default DashboardMain
