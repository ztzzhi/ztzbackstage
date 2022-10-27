import { TOKEN_CHANGE } from "../constant"

export interface loginType {
  token: string
  time1?: string
}

const initState: loginType = {
  token:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJodHRwOi8vNDcuOTguMTYwLjEyL2F1dGgvbG9naW4iLCJpYXQiOjE2NjY3NzMxNzIsImV4cCI6MTY2NzYzNzE3MiwibmJmIjoxNjY2NzczMTcyLCJqdGkiOiIzbDF1VGZ3TzFaek41eHZaIiwic3ViIjoie1wiaWRcIjoxODMsXCJ1c2VybmFtZVwiOlwidHJhaW5pbmdcIixcInR5cGVcIjoxLFwib3JnX2lkXCI6MX0iLCJwcnYiOiJmNmI3MTU0OWRiOGMyYzQyYjc1ODI3YWE0NGYwMmI3ZWU1MjlkMjRkIn0.iMWgk_OcPQ0-eKsdpjKMuFLpAJ9oa5h8KPIyq2D0ZrxElFeIfL9EjYh5YLpA_nv8y9HKvQmM_w_MoBFGWUX7dg",
  time1: "12345"
}

export default function loginReducer(preState = initState, action: any) {
  const { type, data } = action
  let newState
  switch (type) {
    case TOKEN_CHANGE:
      newState = { ...initState, token: data.token }
      break
    default:
      newState = preState
      break
  }
  return newState
}
