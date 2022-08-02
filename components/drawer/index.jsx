import React, { useEffect, useState } from "react"
import style from "./style.module.scss"
const DrawerMenu = ({ showDrawer, setShowDrawer, showTaskModal,showNoteModal }) => {
  const [hideDrawer, setHideDrawer] = useState(showDrawer)
  const handleHideDrawer = () => {
    setHideDrawer(false)
    setShowDrawer(false)
  }
  useEffect(() => {
    setHideDrawer(showDrawer)
  }, [showDrawer])

  const taskModalShow=()=>{
    showTaskModal(true)
    console.log("yeh alllah");
  }
  const noteModalShow=()=>{
    showNoteModal(true)
    console.log("yeh alllah");
  }

  return (
    <div className={`${style.drawer_main} ${!hideDrawer ? style.hide : ""} `}>
      <div className={style.close_btn} onClick={() => handleHideDrawer()}>
        <i className="fa-solid fa-xmark"></i>
      </div>
      <div
        className={`${style.item} ${style.todolist}`}
        onClick={() => taskModalShow()}
      >
        <i className="fa-solid fa-table-list"></i>
        <div className={style.text}>Add Task</div>
      </div>
      <div className={`${style.item} ${style.note}`} onClick={()=>noteModalShow()}>
        <i className="fa-solid fa-book"></i>
        <div className={style.text}>Add Notes</div>
      </div>
    </div>
  )
}

export default DrawerMenu
