import React from "react";
import TweetButton from "../Button/TweetButton";
import SidebarItem from "./SidebarItem";
import { BsTwitter,BsPeople} from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { HiOutlineHome, HiOutlineUser } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";

const Sidebar = () => {
     const { data: currentUser } = useCurrentUser();

     const items = [
          {
               label: "Home",
               href: "/",
               icon: HiOutlineHome,
          },
          {
               label: "Notifications",
               href: "/notifications",
               icon: IoMdNotificationsOutline,
               alert: currentUser?.hasNotification
          },
          {
               label: "Connections",
               href: "/connections",
               icon: BsPeople,
          },
          {
               label: "Profile",
               href: "/users/" +currentUser?.id,
               icon: HiOutlineUser,
          },
     ];

     return (
          <div className="h-full col-span-1">
               <div className="mt-3 mb-10 ml-3">
                    <BsTwitter color="rgb(29, 155, 240)" width={28} size={28} />
               </div>
               <div className="flex flex-col items-start gap-y-2">
                    {items.map(({ href, icon, label , alert}) => (
                         <SidebarItem
                              href={href}
                              icon={icon}
                              label={label}
                              key={label}
                              user={currentUser}
                              alert={alert}
                         />
                    ))}
                    {currentUser && (
                         <SidebarItem
                              href="/"
                              label="Logout"
                              icon={BiLogOut}
                              onHandleClick={() => signOut()}
                              user={currentUser}
                         />
                    )}
               </div>
               <div className="mt-3">
                    <TweetButton text="Tweet" />
               </div>
          </div>
     );
};

export default Sidebar;
