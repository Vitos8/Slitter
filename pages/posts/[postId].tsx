import { useMemo } from "react";
import Header from "@/components/Layout/Header";
import { useRouter } from "next/router";
import usePost from "@/hooks/usePost";
import PostItem from "@/components/Posts/PostItem";
import PostForm from "@/components/Posts/PostForm";
import CommentsFeed from "@/components/Comments/CommentsFeed";
import Loader from "@/components/Loader/Loader";

const PostView = () => {
     const router = useRouter();
     const postId = useMemo(() => {
          return router.query.postId;
     }, [router.query.postId]);
     const { data: post } = usePost(postId as string);

     if (!post || postId) {
          return (
               <div className="mt-[30px] mb-[40px] flex justify-center items-center">
                    <Loader size="md" />
               </div>
          );
     }

     return (
          <>
               <Header label="Tweet" showBackArrow />
               <div>
                    <PostItem data={post} userId={postId} />
                    <PostForm
                         isComment
                         postId={postId as string}
                         placeholder="Write a comment to this tweet !"
                    />
                    <CommentsFeed postId={postId} />
               </div>
          </>
     );
};

export default PostView;
