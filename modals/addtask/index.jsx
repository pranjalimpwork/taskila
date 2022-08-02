import React, { useEffect, useState } from "react"
import style from "./style.module.scss"
import { Input, Select } from "antd"
import { useTask } from "../../store/taskcontext/task"

const AddTaskModal = ({ showModal, setShowModal }) => {
  const [hideModal, setHideModal] = useState(showModal)
  const [prority, setPrority] = useState("HIGH")
  const [title, setTitle] = useState("")
  const [taskAddStatus, setTaskAddStatus] = useState(false)
  const { task, setTask } = useTask()
  const [statusMsg, setStatusMsg] = useState("")
  const handleHideModal = () => {
    setShowModal(false)
    setHideModal(false)
  }

  const handleTaskUpdate = () => {
    if (!title || title === "") {
      setStatusMsg("Please Enter Task Name")
      setTaskAddStatus(true)
      setTimeout(() => {
        setTaskAddStatus(false)
      }, 1500)
      return
    }
    setStatusMsg("Task Added Successfully!")
    const date = new Date()

    let newtask = {
      title: title,
      priority: prority,
      date: date.toDateString(),
      status: "Pending",
      time: date.toLocaleString("en-US", { hour: "numeric", hour12: true }),
      timer: true,
    }

    const newTaskList = [newtask, ...task]

    localStorage.setItem("task", JSON.stringify(newTaskList))
    setTask(newTaskList)
    setTaskAddStatus(true)
    setTimeout(() => {
      setTaskAddStatus(false)
    }, 2000)
    setTitle("");
  }

  useEffect(() => {
    setHideModal(showModal)
    setTask(
      window.localStorage.getItem("task")
        ? JSON.parse(window.localStorage.getItem("task"))
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
              taskAddStatus ? style.show : ""
            } `}
          >
            {statusMsg}
          </div>
          <div className={style.modal}>
            <div className={style.modal_title}>What Task You Want To Do?</div>
            <div className={style.close_btn} onClick={() => handleHideModal()}>
              <i className="fa-solid fa-xmark"></i>
            </div>
            <div className={style.input_group}>
              <div className={style.label}>Task Name</div>
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
              <div className={style.label}>Priority</div>
              <select
                name=""
                id=""
                className={style.selector}
                onChange={(e) => {
                  setPrority(e.target.value)
                }}
              >
                <option value="HIGH" defaultValue={true}>
                  High
                </option>
                <option value="MID">Medium</option>
                <option value="LOW">Low</option>
              </select>
            </div>
            <button
              className={style.add_task}
              onClick={() => handleTaskUpdate()}
            >
              <i className="fa-solid fa-arrow-up-from-bracket"></i>
              Add task
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default AddTaskModal
