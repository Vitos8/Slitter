import axios from "axios";
import { useCallback, useMemo } from "react";
import { toast } from "react-toastify";

import useCurrentUser from "./useCurrentUser";
import useLoginModal from "./useLoginModal";
import usePost from "./usePost";
import usePosts from "./usePosts";

const useLike = (postId: string) => {
     const {
          data: currentUser,
     } = useCurrentUser();
     const { data: currentPost, mutate: mutateFetchedPost, isLoading } = usePost(postId);
	const { mutate: mutateFetchedPosts } = usePosts();

     const loginModal = useLoginModal();

     const isLiked = useMemo(() => {
          const list = currentPost?.likeIds || [];
          return list.includes(currentUser?.id);
     }, [currentUser, currentPost]);

     const toggleLiked = useCallback(async () => {
          if (!currentUser) {
               return loginModal.onOpen();
          }

          try {
               let request;
               const url = `/api/like?postId=${postId}`;

               if (isLiked) {
                    request = () => axios.delete(url);
               } else {
                    request = () => axios.post(url);
               }

               await request();
               mutateFetchedPosts();
               mutateFetchedPost();

               toast.success(isLiked ? "Unliked !" : "Liked !");
          } catch (error) {
               toast.error("Something went wrong");
          }
     }, [
          currentUser,
          isLiked,
          postId,
		mutateFetchedPosts,
          mutateFetchedPost,
          loginModal,
     ]);

     return {
          isLiked,
          toggleLiked,
          isLoading,
     };
};

export default useLike;
