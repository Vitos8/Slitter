import useUsers from "@/hooks/useUsers";
import React, { useEffect, useState, useRef } from "react";
import { CgProfile } from "react-icons/cg";
import { BsPatchCheckFill } from "react-icons/bs";
import { Bars } from "react-loader-spinner";
import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";
import { useRouter } from "next/router";
import FollowButton from "./FollowButton";
import Avatar from "../Avatar/Avatar";
import axios from "axios";

const Follows = () => {
     const followsRef = useRef(null);
     const router = useRouter();
     const { data: users = [] } = useUsers();
     const { data: currentUser } = useCurrentUser();
     const loginModal = useLoginModal();

     useEffect(() => {
          if(router.pathname === "/connections") {
               followsRef.current.style.display = "none";
               return
          }
          followsRef.current.style.display = "block";
     },[router.pathname])

     const redirectToUser = (id: number) => {
          if (!currentUser) {
               loginModal.onOpen();
               return;
          }
          router.push("/users/" + id);
     };

     const onShowMore = () => {
          if (!currentUser) {
               loginModal.onOpen();
               return;
          }

          router.push("/connections");
     };

     return (
          <div ref={followsRef} className="mt-16 bg-slate-100 ml-5 py-3 rounded-xl">
               <h3 className="text-lg font-bold mb-3 pl-3"> Who to follows</h3>
               {users.length === 0 && (
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
               )}
               <div className="flex flex-col">
                    {users.slice(0, 4).filter((user:any) => user.id !== currentUser?.id).map((user: Record<string, any>) => (
                         <div
                              key={user.id}
                              className=" hover:bg-slate-200 py-3 transition-all px-2  rounded-xl flex justify-between items-center">
                              <div
                                   className="flex flex-row gap-2 items-center"
                                   onClick={() => redirectToUser(user.id)}>
                                   {/*<CgProfile size={35} className="mt-1" />*/}
                                   <Avatar userId={user.id} />

                                   <div className="flex flex-col">
                                        <p className=" font-semibold text-sm  truncate w-[80px] cursor-pointer hover:underline">
                                             {user.name}
                                        </p>
                                        <p className="text-neutral-500 text-sm flex gap-x-1 items-center cursor-pointer">
                                             @{user.username}
                                             <BsPatchCheckFill color="rgb(29, 155, 240)" />
                                        </p>
                                   </div>
                              </div>
                              <FollowButton
                                   userId={user.id as string}
                              />
                         </div>
                    ))}
                    {users.length > 4 && (
                         <div
                              onClick={onShowMore}
                              className="text-sm font-bold mt-3 block mx-auto text-white rounded-2xl px-3 py-1 bg-zinc-800 cursor-pointer hover:bg-zinc-600 active:bg-zinc-900">
                              Show more
                         </div>
                    )}
               </div>
          </div>
     );
};

export default Follows;
