import React from "react"
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./router"
import "./App.less"
function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App
