import { LANGUAGE_CODE } from "../constant"

export interface userType {
  username: string
  userPover: any[]
}

const initState: userType = {
  username: "ztz",
  userPover: ["v1", "v2", "v3", "v4", "v5"]
}

export default function userReducer(preState = initState, action: any) {
  const { type, data } = action
  let newState
  switch (type) {
    case LANGUAGE_CODE:
      newState = { ...initState, username: data.username }
      break
    default:
      newState = preState
      break
  }
  return newState
}
