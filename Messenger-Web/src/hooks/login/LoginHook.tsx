import {useCallback} from "react";
import {useMutation} from "@apollo/client";
import {login_gql} from "@hooks/login/LoginGraphql";
import {history} from "@config/router/BrowserRouter";
import {LoginPayload} from "@hooks/login/interfaces/LoginPayload";

export const useLoginHook = () => {
  const [login, {loading, data, error}] = useMutation(login_gql)

  const handleLogin = useCallback((payload: LoginPayload) => {
    login({
      variables: {
        username: payload.username,
        password: payload.password
      }
    }).then(response => {
      localStorage.setItem("accessToken", response.data.login.token.accessToken)
      localStorage.setItem("refreshToken", response.data.login.token.refreshToken)
      history.push("/")
    }).catch(errors => console.log(errors))
  }, [])

  return { handleLogin,data,loading,error }
}