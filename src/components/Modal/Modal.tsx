/**
 * Modal Component
 * @author SongMM
 */
import React, { useEffect } from 'react'
import style from './index.module.css'
import IconPark from '@/components/IconPark/IconPark.tsx'

/**
 * Modal Props
 */
interface ModalProps {
  children?: React.ReactNode
  isOpen: boolean
  onClose?: () => void
}

function Modal({ isOpen, children, onClose }: ModalProps) {
  const modalRef = React.useRef<HTMLDialogElement>(null)

  /**
   * 监听用户键盘事件
   */
  function watchKeyboard() {
    modalRef.current?.addEventListener('keydown', handleEsc)
  }

  /**
   *  移除监听
   */
  function removeWatchKeyboard() {
    modalRef.current?.removeEventListener('keydown', handleEsc)
  }

  /**
   * Modal 禁止esc关闭弹窗
   * @param event 键盘事件
   */
  function handleEsc(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      event.preventDefault()
    }
  }

  /**
   * Open Modal
   */
  function handleShowModal() {
    if (isOpen) {
      modalRef.current?.showModal()
    }
  }

  /**
   * Close Modal
   */
  function handleCloseModal() {
    if (onClose) {
      onClose()
    } else {
      modalRef.current?.close()
    }
  }

  useEffect(() => {
    watchKeyboard()
    if (isOpen) {
      handleShowModal()
    } else {
      handleCloseModal()
    }
    return () => {
      removeWatchKeyboard()
    }
  }, [isOpen])

  return (
    <>
      {/* Modal overlay */}
      {isOpen && (
        <dialog ref={modalRef} className={style.modal}>
          <div className={style['modal__content']}>
            {/* header */}
            <div className={style['modal__header']}>
              <div className={style['modal__title']}>标题</div>
            </div>
            {/* body */}
            <div className={style['modal__body']}>{children}</div>
            {/* footer */}
            <div className={style['modal__footer']}>
              {/*<div onClick={() => handleCloseModal()}>关闭</div>*/}
              <IconPark icon='close-one' onClick={() => handleCloseModal()} />
            </div>
          </div>
        </dialog>
      )}
    </>
  )
}

export default Modal
