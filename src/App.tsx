import './App.css'
import { useState } from 'react'
import Modal from '@/components/Modal/Modal.tsx'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)

  // 打开对话框
  const openModal = () => setIsOpen(true)
  const openModal2 = () => setIsOpen2(true)

  // 关闭对话框
  const closeModal = () => setIsOpen(false)
  const closeModal2 = () => setIsOpen2(false)

  return (
    <main className='container'>
      <h1>今天天气不错啊</h1>
      <button onClick={openModal}>打开对话框</button>

      {/* Modal 组件 */}
      <Modal isOpen={isOpen} onClose={closeModal}>
        <h2>这是一个自定义的模态内容</h2>
        <p>可以在这里放置任何你想要的内容！</p>
        <button onClick={openModal2}>打开嵌套的模态</button>
        <Modal isOpen={isOpen2} onClose={closeModal2}>
          <h2>这是一个嵌套的模态内容</h2>
        </Modal>
      </Modal>
    </main>
  )
}

export default App
