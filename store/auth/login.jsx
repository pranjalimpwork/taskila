import { createContext, useContext } from "react"

export const AuthContext = createContext({
  user:"",
  access:false,
  setUser:()=>{},
  setAccess:()=>{}
  
})

export const useAuth = () => useContext(AuthContext)
