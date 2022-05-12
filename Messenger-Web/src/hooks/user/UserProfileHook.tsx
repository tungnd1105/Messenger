import {useQuery} from "@apollo/client";
import {queryGetProfile} from "@hooks/user/UserGraphql";

export const useGetUserProfile = () => {
  const { data, loading, error} = useQuery(queryGetProfile);
  return {data, loading, error};
}