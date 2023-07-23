import { fetcher } from "./../libs/fetcher";
import useSWR from "swr";

const useCurrentUser = () => {
     const { data, error, isLoading, mutate } = useSWR(
          null,
          fetcher
     );

     return {
          data,
          isLoading,
          error,
          mutate,
     };
};

export default useCurrentUser;
