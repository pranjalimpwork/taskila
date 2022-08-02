import { createContext, useContext } from "react"

export const TaskContext = createContext({
  task: [],
  setTask: () => {},
  notes:[],
  setNote:()=>{}
})

export const useTask = () => useContext(TaskContext)
