import React, { useEffect } from "react"
import { HashRouter } from "react-router-dom"
import AppRouter from "./router"
import "./App.less"

import "@/assets/css/reset.css"
import "@/assets/css/global.less"

import Performace from "@/Performance"

function App() {
  // useEffect(() => {
  //   initCollection()
  // }, [])
  // const initCollection = () => {
  //   Performace.Instance.onLoad()
  // }
  return (
    <div className="mainContainer">
      <HashRouter>
        <AppRouter />
      </HashRouter>
    </div>
  )
}

export default App
