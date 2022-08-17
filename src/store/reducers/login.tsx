import { TOKEN_CHANGE } from "../constant"

export interface loginType {
  token: string
  time1?: string
}

const initState: loginType = {
  token:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJodHRwOi8vNDcuOTguMTYwLjEyL2F1dGgvbG9naW4iLCJpYXQiOjE2NjA2NDU2MDIsImV4cCI6MTY2MTUwOTYwMiwibmJmIjoxNjYwNjQ1NjAyLCJqdGkiOiJOMVNhbTFlZlk4VFA3Q1ZXIiwic3ViIjoie1wiaWRcIjoyLFwidXNlcm5hbWVcIjpcImFkbWluXCIsXCJ0eXBlXCI6MyxcIm9yZ19pZFwiOjF9IiwicHJ2IjoiZjZiNzE1NDlkYjhjMmM0MmI3NTgyN2FhNDRmMDJiN2VlNTI5ZDI0ZCJ9.DFWVbCq_qCCXTxJmp_M6I14at8Qrkq2DAjZ2CFwWRjgQ3lM0jriWTrU5VyjqkhAxBc6ufEZDYuFwr-0-4G0wQA",
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
