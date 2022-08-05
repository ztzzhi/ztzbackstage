import { TOKEN_CHANGE } from "../constant"

export interface loginType {
  token: string
  time1?: string
}

const initState: loginType = {
  token:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJodHRwOi8vNDcuOTguMTYwLjEyL2F1dGgvbG9naW4iLCJpYXQiOjE2NTk1MTEzMTMsImV4cCI6MTY2MDM3NTMxMywibmJmIjoxNjU5NTExMzEzLCJqdGkiOiJUeUlhTFdVVTFJbGljenJwIiwic3ViIjoie1wiaWRcIjoxLFwidXNlcm5hbWVcIjpcInRyYWluaW5nXCIsXCJ0eXBlXCI6MSxcIm9yZ19pZFwiOjZ9IiwicHJ2IjoiZjZiNzE1NDlkYjhjMmM0MmI3NTgyN2FhNDRmMDJiN2VlNTI5ZDI0ZCJ9.aqerRRyqU8wMVOzUSLjkjCNMDOgahNfCyY6aZOgdrDvAAje6BVN0KFiLurOnFLxbfR4M-aLtR19BAewZsvXSLA",
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
