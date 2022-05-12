import {useCallback} from "react";
import {useMutation} from "@apollo/client";
import {history} from "@config/router/BrowserRouter";
import {mutationLogin} from "@hooks/login/LoginGraphql";
import {LoginPayload} from "@hooks/login/interfaces/LoginPayload";

export const useLogin = () => {
  const [login, {loading, data, error}] = useMutation(mutationLogin);

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

  return {handleLogin, data, loading, error}
}