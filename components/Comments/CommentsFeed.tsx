import React from "react";
import { FC } from "react";
import PostItem from "../Posts/PostItem";
import { Bars } from "react-loader-spinner";
import usePost from "@/hooks/usePost";

const CommentsFeed = ({postId}:any) => {
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
                    <Bars
                         height="80"
                         width="80"
                         color="rgb(29, 155, 240)"
                         ariaLabel="bars-loading"
                         wrapperStyle={{}}
                         wrapperClass=""
                         visible={true}
                    />
               </div>
          );
     }

     return (
          <div className="">
               {post?.comments?.map((item) => (
                    <PostItem data={item} userId={postId} key={item.id} />
               ))}
          </div>
     );
};

export default CommentsFeed;
