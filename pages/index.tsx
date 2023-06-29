import Head from "next/head";
import Header from "@/components/Layout/Header";
import Welcome from "@/components/Welcome/Welcome";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import axios from "axios";
import PostForm from "@/components/Posts/PostForm";
import PostFeed from "@/components/Posts/PostFeed";

export default function Home() {
     const { data: currentUser, isLoading } = useCurrentUser();

     return (
          <>
               <Head>
                    <title>TwitterClone</title>
                    <meta
                         name="viewport"
                         content="width=device-width, initial-scale=1"
                    />
                    <link rel="icon" href="/public/favicon.ico" />
               </Head>
               <main className="overflow-y-scroll h-screen hide-scrollbar">
                    <Header label="Home" />
                    {!currentUser && !isLoading && <Welcome />}
                    <PostForm placeholder="What's happening ?" />
                    <PostFeed/>
               </main>
          </>
     );
}
