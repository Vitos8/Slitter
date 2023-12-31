import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import { formatDistanceToNowStrict } from "date-fns";

import useLoginModal from "@/hooks/useLoginModal";
import useCurrentUser from "@/hooks/useCurrentUser";
//import useLike from "@/hooks/useLike";

import Avatar from "../Avatar/Avatar";
import useLike from "@/hooks/useLike";
interface PostItemProps {
     data: Record<string, any>;
     userId?: string;
}

const PostItem: React.FC<PostItemProps> = ({ data = {}, userId }) => {
     const router = useRouter();
     const loginModal = useLoginModal();

     const { data: currentUser } = useCurrentUser();
     const { isLiked, toggleLiked } = useLike(data.id);

     const goToUser = useCallback(
          (ev: any) => {
               ev.stopPropagation();
               router.push(`/users/${data.user.id}`);
          },
          [router, data.user.id]
     );

     const goToPost = useCallback(() => {
          if (!currentUser) {
               loginModal.onOpen();
               return;
          }
          router.push(`/posts/${data.id}`);
     }, [router, data.id]);

     const onLike = useCallback(
          async (ev: any) => {
               ev.stopPropagation();

               if (!currentUser) {
                    loginModal.onOpen();
                    return;
               }

               toggleLiked();
          },
          [toggleLiked]
     );

     const LikeIcon = useMemo(() => {
          return isLiked ? true : false;
     }, [isLiked]);

     const createdAt = useMemo(() => {
          if (!data?.createdAt) {
               return null;
          }

          return formatDistanceToNowStrict(new Date(data.createdAt));
     }, [data.createdAt]);

     return (
          <div
               onClick={goToPost}
               className="
        border-b-[1px] 
        border-white-800 
        p-5 
        cursor-pointer 
        hover:bg-neutral-200 
        transition
      ">
               <div className="flex flex-row items-start gap-3">
                    <Avatar userId={data.user.id} />
                    <div>
                         <div className="flex flex-row items-center gap-2">
                              <p
                                   onClick={goToUser}
                                   className="
                font-semibold 
                cursor-pointer 
                hover:underline
            ">
                                   {data.user.name}
                              </p>
                              <span
                                   onClick={goToUser}
                                   className="
                text-neutral-500
                cursor-pointer
                hover:underline
                hidden
                md:block
            ">
                                   @{data.user.username}
                              </span>
                              <span className="text-neutral-500 text-sm mt-1">
                                   {createdAt}
                              </span>
                         </div>
                         <div className=" mt-1">{data.body}</div>
                         <div className="flex flex-row items-center mt-3 gap-10">
                              {!userId && (
                                   <div
                                        className="
                flex 
                flex-row 
                items-center 
                text-neutral-500 
                gap-2 
                cursor-pointer 
                transition 
                hover:text-sky-500
            ">
                                        <AiOutlineMessage size={20} />
                                        <p>{data.comments?.length || 0}</p>
                                   </div>
                              )}
                              <div
                                   onClick={onLike}
                                   className="
                flex 
                flex-row 
                items-center 
                text-neutral-500 
                gap-2 
                cursor-pointer 
                transition 
                hover:text-red-500
            ">
                                   {isLiked && !userId ? (
                                        <AiFillHeart color="red" />
                                   ) : (
                                        <AiOutlineHeart />
                                   )}
                                   <p>
                                        {data?.likeIds?.length
                                             ? data?.likeIds?.length
                                             : 0}
                                   </p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default PostItem;
