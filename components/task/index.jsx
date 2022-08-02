import React, { useEffect, useState } from "react"
import style from "./style.module.scss"
import TaskCard from "../taskcard"
import { useTask } from "../../store/taskcontext/task"
const TaskContainer = () => {
  const { task } = useTask()
 
  return (
    <div className={style.task_main}>
      {task.map((val, ind) => {
        return <TaskCard key={ind} data={val} id={ind} />
      })}
      {(!task || task.length === 0) && (
        <div className={style.no_data}>
          <i className="fa-solid fa-thumbtack"></i> No Task Added Yet !
        </div>
      )}
    </div>
  )
}

export default TaskContainer
