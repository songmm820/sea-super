import React from 'react'

/**
 * Modal Props
 */
interface ModalProps {
  children?: React.ReactNode
  isOpen: boolean
  onClose?: () => void
}

/**
 * Modal Component
 */
function Modal({ isOpen, children, onClose }: ModalProps) {
  return (
    <>
      {/* Modal overlay */}
      {isOpen && (
        <dialog className='modal' open>
          <div className='modal-content'>
            <div className='modal-header'>
              <button className='close-btn' onClick={onClose}>
                X
              </button>
            </div>
            <div className='modal-body'>{children}</div>
          </div>
        </dialog>
      )}
    </>
  )
}

export default Modal
