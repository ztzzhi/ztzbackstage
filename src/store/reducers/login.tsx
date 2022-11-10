import { TOKEN_CHANGE } from "../constant"

export interface loginType {
  token: string
  time1?: string
}

const initState: loginType = {
  token:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJodHRwOi8vNDcuOTguMTYwLjEyL2F1dGgvbG9naW4iLCJpYXQiOjE2Njc5NzY1NzQsImV4cCI6MTY2ODg0MDU3NCwibmJmIjoxNjY3OTc2NTc0LCJqdGkiOiJUQnpTaFpQTmFPZHJFWld2Iiwic3ViIjoie1wiaWRcIjoxODMsXCJ1c2VybmFtZVwiOlwidHJhaW5pbmdcIixcInR5cGVcIjoxLFwib3JnX2lkXCI6MX0iLCJwcnYiOiJmNmI3MTU0OWRiOGMyYzQyYjc1ODI3YWE0NGYwMmI3ZWU1MjlkMjRkIn0._ljEmMGr8JGKHfeQ6ACOvE7BPOR-CbR7bGCSKtsrtMW8qRM-Z-x-RjByY6JO7USnuqgcxf_4r1aLQR3ZmZl5-g",
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
