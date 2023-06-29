import usePosts from "@/hooks/usePosts";
import { FC } from "react";
import PostItem from "./PostItem";
import { Bars } from "react-loader-spinner";

interface PostFeedProps {
     postId?: string;
}

const PostFeed: FC<PostFeedProps> = ({ postId }) => {
     const { data: posts = [], isLoading } = usePosts(postId);
     console.log(posts,'posts');
     
     if (posts.length === 0 && postId && !isLoading ) {
          return (
               <div className="mt-[100px] mb-[40px] flex justify-center items-center">
                    <span  className="font-bold text-xl text-sky-600"> {postId ? "This tweet doesn't have any comments" : "Profile doesn't have any tweets"} </span>
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
               {posts.map((item: any) => (
                    <PostItem key={item.id} data={item} userId={postId} />
               ))}
          </div>
     );
};

export default PostFeed;
