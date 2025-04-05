/**
 * Views：Home Main
 * @author songmm
 */

import dashboard_banner from '@/assets/img/home_bg.png'
import { Button } from '@arco-design/web-react'

function DashboardMain() {
  // 背景图区域
  const Banner = () => {
    return (
      <div className='relative'>
        <img className='w-full brightness-50' src={dashboard_banner} />
        <div className='absolute top-[100px] left-[50px] '>
          <div className='text-[#fff] text-[36px] font-bold'>
            发现精彩游戏世界
          </div>
          <div className='mt-[10px] text-[#FFFFFFE6] font-[18px]'>
            加入我们的在线游戏平台，体验丰富多样的休闲游戏，结识志同
            道合的玩家。
          </div>
          <div className='mt-[20px]'>
            <Button type='primary'>立刻开始</Button>
          </div>
        </div>
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
