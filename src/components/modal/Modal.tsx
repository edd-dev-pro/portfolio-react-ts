import type { FC, ReactNode } from 'react'
import { IoClose } from 'react-icons/io5'

interface ModalProps {
  onClose: () => void
  children: ReactNode
}

const Modal: FC<ModalProps> = ({ onClose, children }) => {
  return (
    <>
      <div
        id="modal"
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      >
        <div className="relative w-full max-w-lg rounded-sm bg-neutral-800 p-8 text-white shadow-xl">
          <button
            type="button"
            aria-label="Close modal"
            className="absolute right-4 top-4 text-2xl text-neutral-400 transition-colors cursor-pointer hover:text-primary"
            onClick={onClose}
          >
            <IoClose />
          </button>
          {children}
        </div>
      </div>
    </>
  )
}

export default Modal
