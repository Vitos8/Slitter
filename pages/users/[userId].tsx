import Header from "@/components/Layout/Header";
import PostFeed from "@/components/Posts/PostFeed";
import UserDescription from "@/components/UserView/UserDescription";
import UserHero from "@/components/UserView/UserHero";
import useCurrentUser from "@/hooks/useCurrentUser";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/router";
import React from "react";
import Loader from "@/components/Loader/Loader";

const UserView = () => {
     const router = useRouter();
     const { userId }: any = router.query;
     const { data: user, isLoading } = useUser(userId);

     if (isLoading) {
          return (
               <div className="mt-[200px] mb-[40px] flex justify-center items-center">
                    <Loader size='lg'
                    />
               </div>
          );
     }

     if(!user) {
          return <div></div>
     }

     return (
          <main className="overflow-y-scroll h-screen hide-scrollbar">
               <Header showBackArrow label="User profile" />
               <UserHero userId={userId as string} />
               <UserDescription userId={userId as string} />
               <PostFeed postId={userId as string} />
          </main>
     );
};

export default UserView;
