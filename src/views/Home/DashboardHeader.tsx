/**
 * Views：Home Header
 * @author songmm
 */
import { ROUTER_PATH } from '@/constants/app.ts'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import classNames from 'classnames'
import Logo from '@/components/Logo/Logo.tsx'

interface ITabItem {
  route: string
  label: string
}

function DashboardHeader() {
  // Hook for navigation
  const navigate = useNavigate()
  const location = useLocation()
  // 头部Tabs
  const tabs: ITabItem[] = [
    {
      route: ROUTER_PATH.DASHBOARD,
      label: '首页'
    },
    {
      route: '/123',
      label: '游戏大厅'
    },
    {
      route: '/123',
      label: '排行榜'
    }
  ]

  useEffect(() => {}, [])

  // 点击tab事件
  const handleClickTab = (tab: ITabItem) => {
    navigate(tab.route)
  }

  // Tabs
  const HeaderTabs = () => {
    return (
      <div className='flex items-center justify-center gap-[32px]'>
        {tabs.map((tab, index) => {
          return <HeaderTabItem tab={tab} key={index} />
        })}
      </div>
    )
  }

  // Tab item
  const HeaderTabItem = ({ tab }: { tab: ITabItem }) => {
    return (
      <div className='text-[#333] text-[15px] font-bold cursor-pointer'>
        <span
          className={classNames({
            'text-primary': location.pathname === tab.route
          })}
          onClick={() => handleClickTab(tab)}
        >
          {tab.label}
        </span>
      </div>
    )
  }

  return (
    <div className='bg-white w-full flex items-center justify-between pl-[24px] pr-[24px]'>
      {/* 左侧 */}
      <div className='h-[60px] flex items-center'>
        <div className='mr-[26px]'>
          <Logo size={50} />
        </div>
        <HeaderTabs />
      </div>
      {/* 右侧 */}
      <div className='flex items-center'>头像</div>
    </div>
  )
}

export default DashboardHeader
