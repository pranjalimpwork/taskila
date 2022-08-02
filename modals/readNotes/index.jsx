import React, { useEffect, useState } from "react"
import style from "./style.module.scss"

const ReadNotesModal = ({ showModal, setShowModal, data }) => {
  const [hideModal, setHideModal] = useState(showModal)
  const handleHideModal = () => {
    setShowModal(false)
    setHideModal(false)
  }

  useEffect(() => {
    setHideModal(showModal)
  }, [showModal])

  return (
    <>
      {hideModal && (
        <div className={style.modal_container}>
          <div
            className={style.overlay}
            onClick={() => handleHideModal()}
          ></div>

          <div className={style.modal}>
            <div className={style.modal_title}>Read Your Notes</div>
            <div className={style.close_btn} onClick={() => handleHideModal()}>
              <i className="fa-solid fa-xmark"></i>
            </div>
            <div className={style.input_group}>
              <div className={style.title}>{data.title}</div>
            </div>
            <div className={style.input_group}>
              <div className={style.disc}>{data.disc}</div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ReadNotesModal
