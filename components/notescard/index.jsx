import React, { useState } from "react"
import ReadNotesModal from "../../modals/readNotes"
import { useTask } from "../../store/taskcontext/task"
import style from "./style.module.scss"

const NotesCard = ({ data, id }) => {
  const { notes, setNote } = useTask()
  const deleteTask = () => {
    const newNotes = notes.filter((val, ind) => {
      return ind !== id
    })
    setNote(newNotes)
    window.localStorage.setItem("notes", JSON.stringify(newNotes))
  }

  const [showModal, setshowModal] = useState(false)

  return (
    <>
      <div className={style.notes_card} onClick={() => setshowModal(true)}>
        <div className={style.date_time_container}>
          <div className={style.time}>{data.time}</div>
          <div className={style.day}>{data.date}</div>
        </div>

        <div className={style.title}>{data.title}</div>
        <div className={style.disc}>{data.disc}</div>

        <div className={style.close_task} onClick={() => deleteTask()}>
          Close
        </div>
      </div>
      <ReadNotesModal
        showModal={showModal}
        setShowModal={setshowModal}
        data={data}
      />
    </>
  )
}

export default NotesCard
