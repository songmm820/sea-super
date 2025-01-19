/**
 * Modal Component
 * @author SongMM
 */
import React, { useEffect } from 'react'
import style from './index.module.scss'
import IconPark from '@/components/IconPark/IconPark.tsx'

/**
 * Modal Props
 */
interface ModalProps {
  title?: string | React.ReactNode
  width?: string
  children?: React.ReactNode
  isOpen: boolean
  onClose?: () => void
  showClose: boolean
  showCancel?: boolean
  showConfirm?: boolean
  cancel?: string | React.ReactNode
  confirm?: string | React.ReactNode
  onCancel?: () => void
  onConfirm?: () => void
  footer?: React.ReactNode
}

function Modal({
  width = '600px',
  title,
  isOpen,
  children,
  onClose,
  cancel,
  confirm,
  showClose = false,
  showCancel = true,
  showConfirm = true,
  onCancel,
  onConfirm,
  footer
}: ModalProps) {
  // Dialog Ref
  const modalRef = React.useRef<HTMLDialogElement>(null)
  // Cancel
  const cancelView = cancel || '取消'
  // Confirm
  const confirmView = confirm || '确定'

  /**
   * Default Style
   */
  const defaultStyle: React.CSSProperties = {
    width: width,
    height: '50%'
  }

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

  /**
   * Cancel Event
   */
  function handleCancel() {
    if (onCancel) {
      onCancel()
    } else {
      handleCloseModal()
    }
  }

  /**
   * Confirm Event
   */
  function handleConfirm() {
    if (onConfirm) {
      onConfirm()
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

  function Footer() {
    return (
      <div className={style['modal__footer']}>
        <div className={style['modal__footer__btns']}>
          {showCancel && (
            <div
              className={`${style['modal__footer__btn']} ${style['cancel']}`}
              onClick={() => handleCancel()}
            >
              {cancelView}
            </div>
          )}
          {showConfirm && (
            <div
              className={`${style['modal__footer__btn']} ${style['confirm']}`}
              onClick={() => handleConfirm()}
            >
              {confirmView}
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Modal overlay */}
      {isOpen && (
        <dialog ref={modalRef} className={style.modal} style={defaultStyle}>
          <div className={style['modal__content']}>
            {/* header */}
            {title && (
              <div className={style['modal__header']}>
                <div className={style['modal__title']}>{title}</div>
                {showClose && (
                  <div className={style['close']}>
                    <IconPark
                      icon='close-small'
                      color='#fff'
                      onClick={() => handleCloseModal()}
                    />
                  </div>
                )}
              </div>
            )}

            {/* body */}
            <div className={style['modal__body']}>{children}</div>
            {/* footer */}
            {(showCancel || showConfirm) && (
              <>
                {footer ? (
                  <div className={style['modal__footer']}>{footer}</div>
                ) : (
                  <Footer />
                )}
              </>
            )}
          </div>
        </dialog>
      )}
    </>
  )
}

export default Modal
