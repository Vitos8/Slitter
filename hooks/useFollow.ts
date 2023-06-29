import axios from "axios";
import { useCallback, useMemo } from "react";
import { toast } from "react-toastify";

import useCurrentUser from "./useCurrentUser";
import useLoginModal from "./useLoginModal";
import useUser from "./useUser";

const useFollow = (userId: string) => {
     const { data: currentUser, mutate: mutateCurrentUser, isLoading } = useCurrentUser();
     const { mutate: mutateFetchedUser } = useUser(userId);

     const loginModal = useLoginModal();

     const isFollowing = useMemo(() => {
          const list = currentUser?.followingIds || [];

          return list.includes(userId);
     }, [currentUser, userId]);

     const toggleFollow = useCallback(async () => {
          if (!currentUser) {
               return loginModal.onOpen();
          }

          try {
               let request;
               const url = `/api/follows?userId=${userId}`;

               if (isFollowing) {
                    request = () => axios.delete(url);
               } else {
                    request = () => axios.post(url);
               }

               await request();
               mutateCurrentUser();
               mutateFetchedUser();

               toast.success(isFollowing ? "Unfollowed !" :"Followed !");
          } catch (error) {
               toast.error("Something went wrong");
          }
     }, [
          currentUser,
          isFollowing,
          userId,
          mutateCurrentUser,
          mutateFetchedUser,
          loginModal,
     ]);

     return {
          isFollowing,
          toggleFollow,
          isLoading
     };
};

export default useFollow;
