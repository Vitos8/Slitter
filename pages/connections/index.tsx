import Avatar from "@/components/Avatar/Avatar";
import FollowButton from "@/components/Buttons/FollowButton";
import Header from "@/components/Layout/Header";
import useUsers from "@/hooks/useUsers";
import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { useRouter } from "next/router";
import useCurrentUser from "@/hooks/useCurrentUser";
import Loader from "@/components/Loader/Loader";

const Connections = () => {
     const { data: users = [], isLoading } = useUsers();
     const { data: currentUser } = useCurrentUser();
     const router = useRouter();

     const redirectToUser = (id: number) => {
          router.push("/users/" + id);
     };
     //console.log(users);

     return (
          <main className="overflow-y-scroll h-screen hide-scrollbar">
               <Header showBackArrow label="Connect" />
               <h2 className="font-bold text-xl p-4">Suggested for you</h2>
               <div className="w-full mt-2">
                    {isLoading && (
                         <div className="mt-[200px] mb-[40px] flex justify-center items-center">
                              <Loader size="lg" />
                         </div>
                    )}
                    {users
                         .filter((user: any) => user.id !== currentUser.id)
                         .map((user: Record<string, any>) => (
                              <div
                                   key={user.id}
                                   className=" hover:bg-slate-200 py-3 transition-all px-2 flex justify-between items-center">
                                   <div
                                        className={`flex flex-row ${
                                             user.bio
                                                  ? "items-start"
                                                  : "items-center"
                                        } gap-x-2`}
                                        onClick={() => redirectToUser(user.id)}>
                                        <Avatar userId={user.id} lg hasBorder />
                                        <div className="flex flex-col">
                                             <p className=" font-semibold text-md flex items-center gap-x-2  cursor-pointer hover:underline">
                                                  {user.name}
                                                  <BsPatchCheckFill color="rgb(29, 155, 240)" />
                                             </p>
                                             <p className="text-neutral-500 text-sm flex gap-x-1 items-center cursor-pointer">
                                                  @{user.username}
                                             </p>
                                             <p className="text-sm w-[300px] mt-1 cursor-pointer hover:underline">
                                                  {user.bio}
                                             </p>
                                        </div>
                                   </div>
                                   <FollowButton bgColorBlue userId={user.id} />
                              </div>
                         ))}
               </div>
          </main>
     );
};

export default Connections;
