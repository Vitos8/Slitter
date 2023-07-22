import useCurrentUser from "@/hooks/useCurrentUser";
import useUser from "@/hooks/useUser";
import { FC, useMemo } from "react";
import FollowButton from "../Buttons/FollowButton";
import { BiCalendar } from "react-icons/bi";
import { format } from "date-fns";
import useEditModal from "@/hooks/useEditModal";
import { Bars } from "react-loader-spinner";
import Loader from "@/components/Loader/Loader";

interface UserDescProps {
     userId: string;
}

const UserDescription: FC<UserDescProps> = ({ userId }) => {
     const { data: user, isLoading } = useUser(userId);
     const { data: currentUser } = useCurrentUser();
     const editModal = useEditModal();

     const createdAt = useMemo(() => {
          if (!user?.createdAt) {
               return null;
          }

          return format(new Date(user.createdAt), "MMMM yyyy");
     }, [user]);

     if (isLoading) {
          return (
               <div className="mt-[100px] mb-[40px] flex justify-center items-center">
                    <Loader size="lg" />
               </div>
          );
     }

     return (
          <div className="mt-3 pb-5  border-b-[1px] border-white-900">
               <div className="flex justify-end pr-5">
                    {userId === currentUser.id ? (
                         <div
                              onClick={() => editModal.onOpen()}
                              className="border border-gray-300 px-4 py-1 rounded-3xl cursor-pointer font-bold hover:bg-gray-100 transition active:bg-white">
                              Edit profile
                         </div>
                    ) : (
                         <FollowButton bgColorBlue userId={user.id} />
                    )}
               </div>
               <div className="mt-10 ml-10">
                    <div className="text-2xl font-bold">{user.name}</div>
                    <div className="text-gray-500 mb-5">@{user.username}</div>
                    <div className="">
                         {user.bio ? user.bio : "My description 	"}
                    </div>
                    <div className="mt-5 flex gap-x-1 items-center">
                         <BiCalendar size={30} />
                         <p className="font-bold ">Joined {createdAt}</p>
                    </div>
                    <div className="mt-2 flex gap-x-4">
                         <div className="flex gap-x-2 font-bold">
                              <span className="">
                                   {user?.followingIds?.length}
                              </span>
                              <span className="text-neutral-500">
                                   Following
                              </span>
                         </div>
                         <div className="flex gap-x-2 font-bold">
                              <span className="">
                                   {user?.followersCount || 0}
                              </span>
                              <span className="text-neutral-500">
                                   Followers
                              </span>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default UserDescription;
