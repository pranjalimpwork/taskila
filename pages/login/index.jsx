import React, { useState,useEffect } from "react"
import style from "./style.module.scss"
import { Input, Select } from "antd"
import { useAuth } from "../../store/auth/login"
import { useRouter } from "next/router"
const Login = () => {
  const [userName, setuserName] = useState("")
  const {setUser,setAccess,access,user}=useAuth();
  const route=useRouter();
  const login=()=>{
    setAccess(true)
    setUser(userName);
    window.localStorage.setItem("user",JSON.stringify(userName));
    window.localStorage.setItem("access",JSON.stringify(true));
    route.replace("/")
  }

  if (user && access ) {
    route.replace("/")
  }
 
  return (
    <div className={style.login_main}>
      <div className={style.login_modal}>
        <div className={style.modal_title}>Please Enter Your Name</div>
       
        <div className={style.input_group}>
          <div className={style.label}>User Name</div>
          <Input
            placeholder="Enter Name"
            value={userName}
            onChange={(e) => setuserName(e.target.value)}
            className={style.input}
          />
        </div>
        
        <button className={style.add_task} onClick={()=>login()}>
          <i className="fa-solid fa-arrow-up-from-bracket"></i>
          Login
        </button>
      </div>
    </div>
  )
}

export default Login
