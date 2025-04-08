/**
 * Views：Home 界面
 * @author songmm
 */
import DashboardHeader from '@/views/Home/DashboardHeader.tsx'
import DashboardMain from '@/views/Home/DashboardMain.tsx'

function Home() {
  return (
    <main className='bg-[#f9fafb] flex flex-col w-full h-full min-w-[568px]'>
      {/* header */}
      <DashboardHeader />
      {/* main */}
      <DashboardMain />
    </main>
  )
}

export default Home
