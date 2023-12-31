import React from "react";
import { FC } from "react";
import PostItem from "../Posts/PostItem";
import usePost from "@/hooks/usePost";
import Loader from "@/components/Loader/Loader";

const CommentsFeed = ({ postId }: any) => {
     const { data: post = {}, isLoading } = usePost(postId);

     if (post.length === 0 && postId && !isLoading) {
          return (
               <div className="mt-[100px] mb-[40px] flex justify-center items-center">
                    <span className="font-bold text-xl text-sky-600">
                         {" "}
                         {"This tweet doesn't have any comments"}{" "}
                    </span>
               </div>
          );
     }

     if (isLoading) {
          return (
               <div className="mt-[50px] mb-[40px] flex justify-center items-center">
                    <Loader size="lg" />
               </div>
          );
     }

     return (
          <div className="">
               {post?.comments?.map((item: any) => (
                    <PostItem data={item} userId={postId} key={item.id} />
               ))}
          </div>
     );
};

export default CommentsFeed;
