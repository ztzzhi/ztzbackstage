import React, { useEffect } from "react"
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./router"
import "./App.less"
import "@/assets/css/reset.css"
import "@/assets/css/global.less"
import Performace from "@/Performance"

function App() {
  useEffect(() => {
    initCollection()
  }, [])
  const initCollection = () => {
    Performace.Instance.onLoad()
  }
  return (
    <div className="mainContainer a b">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  )
}

export default App
