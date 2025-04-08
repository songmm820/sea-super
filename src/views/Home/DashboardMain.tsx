/**
 * Views：Home Main
 * @author songmm
 */

function DashboardMain() {
  // 立刻开始

  // 背景图区域
  const Banner = () => {
    return (
      <div className='relative h-[300px] bg-[#eef3ff]'>
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
