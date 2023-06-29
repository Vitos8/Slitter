import { FC, useCallback } from "react";
import { useRouter } from "next/router";
import { BsArrowLeft } from "react-icons/bs";

interface IHeaderProps {
     label: string;
     showBackArrow?: boolean;
}

const Header: FC<IHeaderProps> = ({ label, showBackArrow }) => {
     const router = useRouter();

     const onBack = useCallback(() => {
          router.back();
     }, [router]);

     return (
          <div className="p-4 border-b-[1px] sticky backdrop-blur-md z-[10] top-0 flex gap-x-5 items-center">
               {showBackArrow && (
                    <div className="cursor-pointer" onClick={onBack}>
                         <BsArrowLeft size={25} />
                    </div>
               )}
               <h1 className="text-xl font-bold">{label}</h1>
          </div>
     );
};

export default Header;
