import useUser from "@/hooks/useUser";
import Image from "next/image";
import { FC } from "react";
import { CgProfile } from "react-icons/cg";

interface UserAvatarProps {
     src: string;
}

const UserAvatar: FC<UserAvatarProps> = ({ src }) => {
     return (
          <div
               className={`w-[180px] h-[180px] z-10 rounded-full hover:opacity-90 transition cursor-pointer realtive`}>
               {src ? (
                    <Image
                         src={src}
                         fill
                         style={{ objectFit: "cover", borderRadius: "100%", padding: '5px' }}
                         alt="avatar"
                    />
               ) : (
                    <CgProfile size={180} className="mt-1" />
               )}
          </div>
     );
};

export default UserAvatar;
