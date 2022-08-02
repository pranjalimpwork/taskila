import React, { useEffect, useState } from "react"
import style from "./style.module.scss"
import { Input, Select } from "antd"
import { useTask } from "../../store/taskcontext/task"
const { TextArea } = Input;
const AddNotesModal = ({ showModal, setShowModal }) => {
  const [hideModal, setHideModal] = useState(showModal)
  const [title, setTitle] = useState("")
  const [disc, setDisc] = useState("")
  const [noteAddStatus, setNoteAddStatus] = useState(false)
  const { notes, setNote } = useTask()
  const [statusMsg, setStatusMsg] = useState("")
  const handleHideModal = () => {
    setShowModal(false)
    setHideModal(false)
  }

  const handleNotesUpdate = () => {
    if (!title || title === "" || !disc || disc==="") {
      setStatusMsg("Please Enter Note & Discription Name")
      setNoteAddStatus(true)
      setTimeout(() => {
        setNoteAddStatus(false)
      }, 1500)
      return
    }
    setStatusMsg("Notes Added Successfully!")
    const date = new Date()

    let newNote = {
      title: title,
      disc: disc,
      date: date.toDateString(),
      time: date.toLocaleString("en-US", { hour: "numeric", hour12: true }),
      timer: true,
    }

    const newNoteList = [newNote, ...notes]

    localStorage.setItem("notes", JSON.stringify(newNoteList))
    setNote(newNoteList)
    setNoteAddStatus(true)
    setTimeout(() => {
      setNoteAddStatus(false)
    }, 2000)
    setDisc("")
    setTitle("")
  }

  useEffect(() => {
    setHideModal(showModal)
    setNote(
      window.localStorage.getItem("notes")
        ? JSON.parse(window.localStorage.getItem("notes"))
        : [],
    )
  }, [showModal])

  return (
    <>
      {hideModal && (
        <div className={style.modal_container}>
          <div
            className={style.overlay}
            onClick={() => handleHideModal()}
          ></div>
          <div
            className={`${style.task_add_status} ${
              noteAddStatus ? style.show : ""
            } `}
          >
            {statusMsg}
          </div>
          <div className={style.modal}>
            <div className={style.modal_title}>What Note You Want To Do?</div>
            <div className={style.close_btn} onClick={() => handleHideModal()}>
              <i className="fa-solid fa-xmark"></i>
            </div>
            <div className={style.input_group}>
              <div className={style.label}>Note Title</div>
              <Input
                placeholder="Enter Task Name"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={style.input}
                required={true}
                maxLength={"30"}
              />
            </div>
            <div className={style.input_group}>
            <div className={style.label}>Discription</div>
            <TextArea rows={4} value={disc} onChange={(e)=>setDisc(e.target.value)} />
            </div>
            <button
              className={style.add_task}
              onClick={() => handleNotesUpdate()}
            >
              <i className="fa-solid fa-arrow-up-from-bracket"></i>
              Add Note
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default AddNotesModal
