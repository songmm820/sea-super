/**
 * Home View
 * @author SongMM
 */

import { App as AppProvider, Button, Space } from 'antd'
import { useAtom } from 'jotai'
import { countAtom } from '@/jotai-atoms/user'

function Home() {
  const { message, modal, notification } = AppProvider.useApp()

  const [count] = useAtom(countAtom)

  const showMessage = () => {
    message.success('Success!')
  }

  const showModal = () => {
    modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...'
    })
  }

  const showNotification = () => {
    notification.info({
      message: 'Notification topLeft',
      description: 'Hello, Ant Design!!',
      placement: 'topLeft'
    })
  }

  return (
    <main className='flex justify-center items-center w-full h-full'>
      <p className='text-green-500'>{count}</p>
      <p className='text-red-500'>今天天气不错啊</p>
      <Space wrap>
        <Button type='primary' onClick={showMessage}>
          Open message
        </Button>
        <Button type='primary' onClick={showModal}>
          Open modal
        </Button>
        <Button type='primary' onClick={showNotification}>
          Open notification
        </Button>
      </Space>
    </main>
  )
}

export default Home
