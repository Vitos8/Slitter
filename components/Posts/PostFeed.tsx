import usePosts from "@/hooks/usePosts";
import { FC } from "react";
import PostItem from "./PostItem";
import Loader from "@/components/Loader/Loader";

interface PostFeedProps {
     postId?: string;
}

const PostFeed: FC<PostFeedProps> = ({ postId }) => {
     const { data: posts = [], isLoading } = usePosts(postId);

     if (posts.length === 0 && postId && !isLoading) {
          return (
               <div className="mt-[100px] mb-[40px] flex justify-center items-center">
                    <span className="font-bold text-xl text-sky-600">
                         {" "}
                         {postId
                              ? "This tweet doesn't have any comments"
                              : "Profile doesn't have any tweets"}{" "}
                    </span>
               </div>
          );
     }

     if (isLoading) {
          return (
               <div className="mt-[200px] mb-[40px] flex justify-center items-center">
                    <Loader size="lg" />
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
