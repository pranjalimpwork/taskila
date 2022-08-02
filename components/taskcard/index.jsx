import React, { useState } from "react"
import { useTask } from "../../store/taskcontext/task"
import style from "./style.module.scss"
const TaskCard = ({ data, id }) => {
  const [done, setDone] = useState(data.status === "Pending" ? false : true)
  const colorObj = {
    MID: "#339952",
    LOW: "#335899",
    HIGH: "#99333a",
  }
  const { task, setTask } = useTask()
  const [taskList, setTaskList] = useState(task || [])
  const deleteTask = () => {
    const newTaskList = task.filter((val, ind) => {
      return ind !== id
    })
    setTask(newTaskList)
    window.localStorage.setItem("task", JSON.stringify(newTaskList))
  }
  const handleStatus = () => {
    task[id].status = "Completed"
    setDone(true)
    setTask(task)
    window.localStorage.setItem("task", JSON.stringify(task))
  }

  return (
    <div className={style.task_card}>
      <div
        className={style.priority}
        style={{ backgroundColor: `${colorObj[data.priority]}` }}
      >
        {data.priority}
      </div>
      <div className={style.date_time_container}>
        <div className={style.time}>{data.time}</div>
        <div className={style.day}>{data.date}</div>
      </div>

      <div className={style.title}>{data.title}</div>

     
      <div className={style.footer}>
      <div className={style.status}>
        {done ? (
          <>
            <i className="fa-solid fa-circle-check done"></i>
            Completed
          </>
        ) : (
          <>
            <span>
              <i className="fa-solid fa-clock pending"></i>
            </span>
            Pending
          </>
        )}
      </div>
        <div className={style.btn_group}>
          <div
            className={style.status_change_btn}
            onClick={() => handleStatus(true)}
          >
            {" "}
            Change Status{" "}
          </div>
          <div className={style.close_task} onClick={() => deleteTask()}>
            Close
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskCard
