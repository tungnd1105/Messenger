import {useCallback} from "react";
import {useMutation} from "@apollo/client";
import {useNavigate} from "react-router-dom";
import {LoginPayload} from "@services/auth/AuthType";
import {login_gql} from "@services/auth/AuthGraphql";


export const useLogin = () => {
  const navigate = useNavigate()
  const [login, {data, error, loading}] = useMutation(login_gql)

  const handleLogin = useCallback((payload: LoginPayload) => {
    login({
      variables: {username: payload.username, password: payload.password}
    }).then(response => {
      localStorage.setItem("accessToken", response.data.login.token.accessToken)
      localStorage.setItem("refreshToken", response.data.login.token.refreshToken)
      navigate("/")
    })
  }, [data])

  return {handleLogin, data, error, loading}
}