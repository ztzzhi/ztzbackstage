import { useLocation, Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "@/store"
import { allRouters } from "./index"

export default function routerBefore({ children }: any) {
  const userPover = useSelector<RootState, any[]>(state => state.user.userPover)
  const location = useLocation()

  const lastItem = location.pathname.split("/").pop()

  const pover = allRouters[0].children?.find(
    item => item.path === location.pathname
  )?.pover
  if (!isNaN(Number(lastItem))) {
    return <>{children}</>
  }
  if (userPover?.length && userPover.some(item => item === pover)) {
    return <>{children}</>
  } else {
    return <Navigate to={"/401"} replace></Navigate>
  }
}
