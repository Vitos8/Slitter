import useLoginModal from "@/hooks/useLoginModal";
import { Router, useRouter } from "next/router";
import { FC, useCallback } from "react";
import { BsDot } from "react-icons/bs";

interface ISidebarItemProps {
     href: string;
     label: string;
     icon: any;
     onHandleClick?: () => void;
     user: any;
     alert?: boolean;
}

const SidebarItem: FC<ISidebarItemProps> = ({
     href,
     icon: Icon,
     label,
     onHandleClick,
     user,
     alert,
}) => {
     const router = useRouter();
     const login = useLoginModal();

     const handleClick = useCallback(() => {
          if (onHandleClick) {
               return onHandleClick();
          }

          if (!user) {
               return login.onOpen();
          }

          if (router.pathname !== href) {
               router.push(href);
          }
     }, [onHandleClick, router, href, user, login]);

     return (
          <div
               className="flex  gap-x-[10px] cursor-pointer rounded-3xl p-3 hover:bg-slate-100 transition-al"
               onClick={handleClick}>
               <div className="relative">
                    {alert ? (
                         <BsDot
                              className="text-red-500 absolute -top-5 left-0"
                              size={50}
                         />
                    ) : null}
                    <Icon size={30} />
               </div>
               <p className="text-xl hidden md:block">{label}</p>
          </div>
     );
};

export default SidebarItem;
