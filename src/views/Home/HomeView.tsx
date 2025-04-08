/**
 * Views：Home 界面
 * @author songmm
 */
import DashboardHeader from '@/views/Home/DashboardHeader.tsx'
import DashboardMain from '@/views/Home/DashboardMain.tsx'

function Home() {
  return (
    <main className='flex flex-col w-full h-full'>
      {/* header */}
      <DashboardHeader />
      {/* main */}
      <DashboardMain />
    </main>
  )
}

export default Home
