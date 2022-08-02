import React, { useEffect, useState } from "react"
import style from "./style.module.scss"
import TaskContainer from "../task"
import DrawerMenu from "../drawer"
import AddTaskModal from "../../modals/addtask"
import TaskProvider from "../../store/taskcontext/main"
import NotesContainer from "../notes"
import AddNotesModal from "../../modals/addNotes"
import { useAuth } from "../../store/auth/login"
import { useRouter } from "next/router"
const HomeCompoent = () => {
  const [showDrawer, setshowDrawer] = useState(false)
  const [showTaskModal, setShowTaskModal] = useState(false)
  const [showNoteModal, setShowNoteModal] = useState(false)
  const [currHour, setCurrHour] = useState(0)
  const [wish, setWish] = useState("Good Morning")
  const { user, access } = useAuth()
  const [currDate, setcurrDate] = useState("")
  const route=useRouter();
  useEffect(() => {
    var today = new Date()
    var curHr = today.getHours()
    setcurrDate(today.toDateString())
    if (curHr < 12) {
      setWish("Good Morning")
    } else if (curHr < 18) {
      setWish("Good Afternoon")
    } else {
      setWish("Good Evening")
    }
    setCurrHour(curHr)
  }, [currHour])

  useEffect(() => {
    if (!user || !access || user === "" || access === "") {
      route.replace("/login")
    }
  }, [])

  const handleTabChange = (e, panelId) => {
    const panel = document.getElementById(panelId)
    const allTab = document.querySelectorAll(".tab")
    const allPanel = document.querySelectorAll(".tabpannel")
    for (let index = 0; index < allTab.length; index++) {
      allTab[index].classList.remove(style.active)
      allPanel[index].classList.remove(style.show)
    }
    e.target.classList.add(style.active)
    panel.classList.add(style.show)
  }

  return (
    <div className={style.home_main}>
      {/* <div className={style.logout_btn}>
      <i className="fa-solid fa-power-off"></i>
      Sign Out
      </div> */}
      <div className={style.home_header}>
        <div className={style.date}>{currDate}</div>
        <div className={style.left}>
          <div className={style.main_heading}>
            Hello {user} {wish}
          </div>
          <div className={style.sub_heading}>
            You have some important task today
          </div>
        </div>
        <div className={style.right}></div>
      </div>
      <div className={style.tab_header}>
        <div
          className={`${style.tab_title} tab ${style.task} ${style.active} `}
          onClick={(e) => handleTabChange(e, "task_container")}
        >
          <i className="fa-solid fa-table-list"></i> Task
        </div>
        <div
          className={`${style.tab_title} tab notes ${style.notes} `}
          onClick={(e) => handleTabChange(e, "notes_container")}
        >
          <i className="fa-solid fa-book"></i>
          Notes
        </div>
      </div>
      <TaskProvider>
        <div
          id="task_container"
          className={`${style.tab_pannel_container} ${style.show}  tabpannel`}
        >
          <TaskContainer />
        </div>
        <div
          id="notes_container"
          className={`${style.tab_pannel_container} tabpannel`}
        >
          <NotesContainer />
        </div>
        <AddTaskModal
          setShowModal={setShowTaskModal}
          showModal={showTaskModal}
        />
        <AddNotesModal
          setShowModal={setShowNoteModal}
          showModal={showNoteModal}
        />
      </TaskProvider>
      {!showDrawer && (
        <div className={style.add_btn} onClick={() => setshowDrawer(true)}>
          <i className="fa-solid fa-plus"></i>
        </div>
      )}

      <DrawerMenu
        setShowDrawer={setshowDrawer}
        showDrawer={showDrawer}
        showTaskModal={setShowTaskModal}
        showNoteModal={setShowNoteModal}
      />
    </div>
  )
}

export default HomeCompoent
