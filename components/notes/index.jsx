import React, { useEffect, useState } from "react"
import style from "./style.module.scss"
import NotesCard from "../notescard"
import { useTask } from "../../store/taskcontext/task"
const NotesContainer = () => {
  const { notes } = useTask()

  return (
    <div className={style.notes_main}>
      {notes.map((val, ind) => {
        return <NotesCard key={ind} data={val} id={ind} />
      })}

      {(!notes || notes.length === 0) && (
        <div className={style.no_data}>
          <i className="fa-solid fa-clipboard"></i> No Notes Added Yet !
        </div>
      )}
    </div>
  )
}

export default NotesContainer
