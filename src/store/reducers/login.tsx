import { TOKEN_CHANGE } from "../constant"

export interface loginType {
  token: string
  time1?: string
}

const initState: loginType = {
  token:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJodHRwOi8vNDcuOTguMTYwLjEyL2F1dGgvbG9naW4iLCJpYXQiOjE2NjUxOTY1NDIsImV4cCI6MTY2NjA2MDU0MiwibmJmIjoxNjY1MTk2NTQyLCJqdGkiOiI3Y0tLMTNCZmY5eTFPeUFlIiwic3ViIjoie1wiaWRcIjoyLFwidXNlcm5hbWVcIjpcImFkbWluXCIsXCJ0eXBlXCI6MyxcIm9yZ19pZFwiOjF9IiwicHJ2IjoiZjZiNzE1NDlkYjhjMmM0MmI3NTgyN2FhNDRmMDJiN2VlNTI5ZDI0ZCJ9.e8L6g9uetaHEwxAe2cM-6nRjNmp5k6ET7CHuvQ4u5cKi09qrkXB5Zk3AiD3ouI1rN7nOiGkbCAP-3h7_3zzdtw",
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
