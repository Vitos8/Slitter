import useUser from "@/hooks/useUser";
import Image from "next/image";
import { FC } from "react";
import { CgProfile } from "react-icons/cg";

interface IAvatarProps {
     hasBorder?: boolean;
     lg?: boolean;
     userId: string;
}

const Avatar: FC<IAvatarProps> = ({ userId, lg }) => {
     const { data: user } = useUser(userId);

     return (
          <div
               className={` rounded-full hover:opacity-90 transition cursor-pointer `}>
               {user?.profileImage ? (
                    <Image
                         src={user?.profileImage}
                         style={{
                              width: lg ? "80px" : "55px",
                              height: lg ? "80px" : "55px",
                              borderRadius: "100%",
                         }}
                         height={lg ? 80 : 55}
                         width={lg ? 80 : 55}
                         alt="avatar"
                    />
               ) : (
                    <CgProfile size={lg ? 80 : 55} className="mt-1" />
               )}
          </div>
     );
};

export default Avatar;
