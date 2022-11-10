import React, { lazy, Suspense } from "react"
import { useRoutes, RouteObject } from "react-router-dom"
import "./index.less"
import { lazyFix } from "./fixLazyLoad"

// 公共路由
// import Login from "../pages/Login"
// import NotFound from "../pages/NotFound"
// import NotPermission from "../pages/NotPermission"
// import Layout from "@/containers/layout"
// import Home from "@/pages/Home"
// import Cultivate from "@/pages/Cultivate"
// import CultivateEdit from "@/pages/Cultivate/edit"
// import YangLao from "@/pages/YangLao/index"
// import ComPress from "@/pages/ComPress/index"
// import Bar from "@/pages/bar/index"

// 页面路由
export interface RouteObjectObj {
  caseSensitive?: boolean
  children?: RouteObjectObj[]
  component: React.LazyExoticComponent<any>
  index?: boolean
  path?: string
  pover?: string
}
// lazyFix的使用最好是 在layout下的child 不要给最外层加fix函数 因为每次执行fix函数都会 有固定的时长展示loading 防止加载两边
export const allRouters: RouteObjectObj[] = [
  {
    path: "/",
    component: lazy(() => import("@/containers/layout")),
    pover: "v1",
    children: [
      {
        path: "/",
        component: lazy(() => lazyFix(() => import("@/pages/Home"))),
        pover: "v1"
      },
      {
        path: "/yanglao",
        component: lazy(() => lazyFix(() => import("@/pages/YangLao"))),
        pover: "v1"
      },
      {
        path: "/cultivate",
        component: lazy(() => lazyFix(() => import("@/pages/Cultivate"))),
        pover: "v2"
      },
      {
        path: "/cultivate/edit/:id",
        component: lazy(() => lazyFix(() => import("@/pages/Cultivate/edit"))),
        pover: "v2"
      },
      {
        path: "/compress",
        component: lazy(() => lazyFix(() => import("@/pages/ComPress"))),
        pover: "v3"
      },
      {
        path: "/live",
        component: lazy(() => lazyFix(() => import("@/pages/Live"))),
        pover: "v2"
      }
    ]
  },
  { path: "/bar", component: lazy(() => lazyFix(() => import("@/pages/bar"))) },
  {
    path: "/login",
    component: lazy(() => import("@/pages/Login"))
  },
  {
    path: "/404",
    component: lazy(() => import("@/pages/NotFound"))
  },
  {
    path: "/401",
    component: lazy(() => import("@/pages/NotPermission"))
  },
  {
    path: "*",
    component: lazy(() => import("@/pages/NotFound"))
  }
]

const handleByUseRouter = (
  allRouters: RouteObjectObj[]
): Omit<RouteObjectObj[], "pover"> => {
  return allRouters.map(item => {
    return {
      path: item.path,
      component: item.component,
      children: item.children ? handleByUseRouter(item.children) : undefined,
      caseSensitive: item.caseSensitive,
      index: item.index
    }
  })
}

const routersByUseRoutes = handleByUseRouter(allRouters)

const syncRouter = (table: RouteObjectObj[]): RouteObject[] => {
  const mRouteTable: RouteObject[] = []
  table.forEach(route => {
    mRouteTable.push({
      path: route.path,
      element: (
        <Suspense fallback={<div id="firstPage"></div>}>
          <route.component />
        </Suspense>
      ),
      children: route.children && syncRouter(route.children)
    })
  })
  return mRouteTable
}

export default function AppRouter() {
  const routers: React.ReactElement | null = useRoutes(
    syncRouter(routersByUseRoutes)
  )

  return routers
}
