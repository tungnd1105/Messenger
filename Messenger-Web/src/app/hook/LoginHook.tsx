import {useCallback} from "react";
import {useMutation} from "@apollo/client";
import {useNavigate} from "react-router-dom";
import {LoginPayload} from "@app/interface/Auth";
import {gql_login} from "@app/graphql/AuthGraphql";

export const useLoginHook = () => {
  const navigate = useNavigate();
  const [login, {loading, data, error}] = useMutation(gql_login)

  const handleLogin = useCallback((payload: LoginPayload) => {
    login({
      variables: {username: payload.username, password: payload.password}
    }).then(response => {
      localStorage.setItem("accessToken", response.data.login.token.accessToken)
      localStorage.setItem("refreshToken", response.data.login.token.refreshToken)
      navigate("/")
    })
  }, [])

  return {handleLogin, loading, data, error}
}