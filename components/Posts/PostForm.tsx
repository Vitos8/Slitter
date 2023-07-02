import useCurrentUser from "@/hooks/useCurrentUser";
import { FC, useCallback, useState } from "react";
import Avatar from "../Avatar/Avatar";
import { toast } from "react-toastify";
import axios from "axios";
import usePosts from "@/hooks/usePosts";
import usePost from "@/hooks/usePost";

interface PostFormProps {
     placeholder: string;
     postId?: string
     isComment?: boolean;
}

const PostForm: FC<PostFormProps> = ({ postId, placeholder, isComment }) => {
     const { data: currentUser } = useCurrentUser();
     const { mutate: mutatePosts } = usePosts();
     const {mutate: mutatePost} = usePost(postId);
     const [body, setBody] = useState("");
     const [isLoading, setIsLoading] = useState(false);
     const [selectedEmojis, setSelectedEmojis] = useState<any>([]);

     if (!currentUser) {
          return null;
     }

     const onSendPost = async () => {
          try {
               setIsLoading(true);

               const url = isComment
                    ? `/api/comments?postId=${postId}`
                    : "/api/posts";

               if (body) {
                    const id = toast.loading("Please wait...");

                    await axios
                         .post(url, { body })
                         .then((res) => {
                              toast.update(id, {
                                   render: "Tweet created ! 👌",
                                   type: "success",
                                   isLoading: false,
                                   autoClose: 3000,
                              });
                         })
                         .catch((err) => {
                              toast.update(id, {
                                   render: "Something went wrong 🤯",
                                   type: "error",
                                   isLoading: false,
                                   autoClose: 3000,
                              });
                         });

                    setIsLoading(false);
                    setBody("");
                    mutatePosts();
                    mutatePost();
               }
          } catch (error) {
               console.log(error);
          }
     };

     return (
          <div className="p-4 border-b-[1px] border-white-800">
               <div className="flex items-start justify-start">
                    <div className="w-[95px]">
                         <Avatar userId={currentUser.id} />
                    </div>
                    <textarea
                         disabled={isLoading}
                         value={body}
                         onChange={(e) => setBody(e.target.value)}
                         maxLength={200}
                         className="h-[100px] w-full ring-0 outline-none text-[20px]  peer resize-none placeholder-neutral-500 "
                         placeholder={placeholder}
                    />
               </div>
               <div className="flex justify-end mt-3">
                    <button
                         disabled={isLoading}
                         onClick={onSendPost}
                         className="bg-sky-500 py-2 px-4 font-bold rounded-full text-white transition hover:bg-sky-600 active:bg-sky-900 cursor-pointer">
                         Tweet
                    </button>
               </div>
          </div>
     );
};

export default PostForm;
