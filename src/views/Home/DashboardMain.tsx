/**
 * Views：Home Main
 * @author songmm
 */

import { Button } from '@arco-design/web-react'
import toast from 'react-hot-toast'

function DashboardMain() {
  // 立刻开始
  const startNow = () => {
    toast.success('立刻开始！！')
  }

  // 背景图区域
  const Banner = () => {
    return (
      <div className='relative h-[300px] bg-blue-200'>
        <div className='absolute top-[100px] left-[50px] '>
          <div className='text-[36px] font-bold'>发现精彩游戏世界</div>
          <div className='mt-[10px] font-[18px]'>
            加入我们的在线游戏平台，体验丰富多样的休闲游戏，结识志同
            道合的玩家。
          </div>
          <div className='mt-[20px]'>
            <Button type='primary' onClick={startNow}>
              立刻开始
            </Button>
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
