import { useMemo } from "react";
import Header from "../../components/Layout/Header";
import { useRouter } from "next/router";
import usePost from "../../hooks/usePost.ts";
import PostItem from "../../components/Posts/PostItem";
import { Bars } from "react-loader-spinner";
import PostForm from "@/components/Posts/PostForm";
import CommentsFeed from "@/components/Comments/CommentsFeed";

const PostView = () => {
	const router = useRouter();
     const postId = useMemo(() => {
          return router.query.postId;
     }, [router.query.postId]);
     const { data: post } = usePost(postId);
	
     if (!post) {
          return (
               <div className="mt-[30px] mb-[40px] flex justify-center items-center">
                    <Bars
                         height="50"
                         width="50"
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
          <>
               <Header label="Tweet" showBackArrow />
               <div>
                    <PostItem data={post} userId={postId} />
                    <PostForm
                         isComment
                         postId={postId}
                         placeholder="Write a comment to this tweet !"
                    />
                    <CommentsFeed postId={postId} />
               </div>
          </>
     );
};

export default PostView;
