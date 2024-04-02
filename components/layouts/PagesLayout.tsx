'use client'
import { $showQuickViewModal, closeQuickViewModal } from '@/context/modals'
import { useUnit } from 'effector-react'
import Layout from './Layout'
import { removeOverflowHiddenFromBody } from '@/lib/utils/common'

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  const showQuickViewModal = useUnit($showQuickViewModal)

  const handleCloseQuickViewModal = () => {
    removeOverflowHiddenFromBody()
    closeQuickViewModal()
  }

  return (
    <html lang='en'>
      <body>
        <Layout>{children}</Layout>
        <div
          className={`quick-view-modal-overlay ${
            showQuickViewModal ? 'overlay-active' : ''
          }`}
          onClick={handleCloseQuickViewModal}
        />
      </body>
    </html>
  )
}

export default PagesLayout
