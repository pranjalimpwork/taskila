import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { AuthContext } from "./login"

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("")
  const [access, setAccess] = useState(null)
  const route = useRouter()
  useEffect(() => {
    console.log("hello");
    if (window.localStorage.getItem("access")) {
      console.log("dasdasd", JSON.parse(window.localStorage.getItem("access")))
      setAccess(JSON.parse(window.localStorage.getItem("access")))
    }
    if (window.localStorage.getItem("user")) {
      setUser(JSON.parse(window.localStorage.getItem("user")))
    }
  }, [])



  return (
    <AuthContext.Provider value={{ user, setUser, access, setAccess }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
