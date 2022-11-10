import React, { useEffect, useState } from "react"

import { useSelector, useDispatch } from "react-redux"
import { changeTokenAction } from "../../store/actions/login"
import { Button } from "antd"
import { RootState } from "@/store"
import { loginType } from "@/store/reducers/login"
//@ts-ignore
import style from "./index.module.css"
const Index: React.FC = () => {
  const loginState = useSelector<RootState, loginType>(state => state.login)
  const dispatch = useDispatch()
  const [state, setState] = useState(0)
  const handleChangeToken = () => {
    dispatch(changeTokenAction({ token: "1234567" }))
  }

  return (
    <>
      <div className={style.login}>
        Login <span className={style.name}>123</span>
      </div>
      <div className={style.fa}>123</div>
      <div onClick={() => setState(state + 1)}>{state}</div>
      <div>我是store中的token:{loginState.token}</div>
      <Button onClick={handleChangeToken}>点我更改token</Button>
    </>
  )
}

export default Index
