import useUser from "@/hooks/useUser";
import Image from "next/image";
import { FC } from "react";
import UserAvatar from "./UserAvatar";

interface UserHeroProps {
     userId: string;
}

const UserHero: FC<UserHeroProps> = ({ userId }) => {
     const { data: user } = useUser(userId);
     
     return (
          <div className="w-full h-44 bg-neutral-200  relative">
               {user?.coverImage && (
                    <Image
                         src={user.coverImage}
                         style={{ objectFit: "cover" }}
                         fill
                         alt="Cover image"
                    />
               )}
               <div className="absolute bottom-[-90px] bg-white rounded-full  left-5">
                    <UserAvatar src={user.profileImage} />
               </div>
          </div>
     );
};

export default UserHero;
