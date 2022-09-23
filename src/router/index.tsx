import React from "react"
import { useRoutes } from "react-router-dom"

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
export interface RouteObjectObj {
  caseSensitive?: boolean
  children?: RouteObjectObj[]
  element?: React.ReactNode
  index?: boolean
  path?: string
  pover?: string
}

export const allRouters: RouteObjectObj[] = [
  {
    path: "/",
    element: <Layout />,
    pover: "v1",
    children: [
      { path: "/", element: <Home />, pover: "v1" },
      { path: "/yanglao", element: <YangLao />, pover: "v1" },
      { path: "/cultivate", element: <Cultivate />, pover: "v2" },
      { path: "/cultivate/edit/:id", element: <CultivateEdit />, pover: "v2" },
      { path: "/compress", element: <ComPress />, pover: "v3" }
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
]

const handleByUseRouter = (
  allRouters: RouteObjectObj[]
): Omit<RouteObjectObj[], "pover"> => {
  return allRouters.map(item => {
    return {
      path: item.path,
      element: item.element,
      children: item.children ? handleByUseRouter(item.children) : undefined,
      caseSensitive: item.caseSensitive,
      index: item.index
    }
  })
}

const routersByUseRoutes = handleByUseRouter(allRouters)

export default function AppRouter() {
  const routers = useRoutes(routersByUseRoutes)
  return routers
}
