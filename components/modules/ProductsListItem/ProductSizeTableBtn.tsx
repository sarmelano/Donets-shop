'use client'
import { useUnit } from 'effector-react'
import { showSizeTable, $showQuickViewModal } from '@/context/modals'
import { addOverflowHiddenFromBody } from '@/lib/utils/common'
import { ISelectedSizes } from '@/types/common'
import { setSizeTableSizes } from '@/context/sizeTable'
import { useLang } from '@/hooks/useLang'

const ProductSizeTableBtn = ({ sizes, type, className }: ISelectedSizes) => {
  const { lang, translations } = useLang()
  const showQuickViewModal = useUnit($showQuickViewModal)

  const handleShowSizeTable = () => {
    if (!showQuickViewModal) {
      addOverflowHiddenFromBody()
    }

    setSizeTableSizes({ sizes, type })
    showSizeTable()
  }

  return (
    <button className={`btn-reset ${className}`} onClick={handleShowSizeTable}>
      {translations[lang].product.size_table}
    </button>
  )
}

export default ProductSizeTableBtn
