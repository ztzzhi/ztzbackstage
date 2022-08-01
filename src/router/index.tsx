import React, { lazy } from "react"
import { useRoutes, Navigate } from "react-router-dom"

// 公共路由
import Login from "../pages/Login"
import NotFound from "../pages/NotFound"
import NotPermission from "../pages/NotPermission"
import Layout from "@/containers/layout"
import Home from "@/pages/Home"
import Cultivate from "@/pages/Cultivate"
import CultivateEdit from "@/pages/Cultivate/edit"
import YangLao from "@/pages/YangLao/index"
import ComPress from "@/pages/ComPress/index"
import Bar from "@/pages/bar/index"

// 页面路由

export default function AppRouter() {
  const routers = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "cultivate", element: <Cultivate /> },
        { path: "cultivate/edit/:id", element: <CultivateEdit /> },
        { path: "yanglao", element: <YangLao /> },
        { path: "compress", element: <ComPress /> }
      ]
    },
    { path: "/bar", element: <Bar /> },
    {
      path: "/login",
      element: <Login />
    },
    { path: "/404", element: <NotFound /> },
    { path: "/401", element: <NotPermission /> },
    { path: "*", element: <NotFound /> }
  ])
  return routers
}
