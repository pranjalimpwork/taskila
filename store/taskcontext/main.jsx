import React, { useState, useEffect } from "react"
import { TaskContext } from "./task"

const TaskProvider = ({ children }) => {
  const [task, setTask] = useState([])
  const [notes, setNote] = useState([])
  useEffect(() => {
    setTask(JSON.parse(window.localStorage.getItem("task")) || [])
    setNote(JSON.parse(window.localStorage.getItem("notes")) || [])
    
  }, [])

  return (
    <TaskContext.Provider value={{ task, setTask,notes,setNote }}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskProvider
