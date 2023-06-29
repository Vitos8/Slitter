import useCurrentUser from "@/hooks/useCurrentUser";
import useLoginModal from "@/hooks/useLoginModal";
import React from "react";
import { TiMessage } from "react-icons/ti";

const TweetButton = ({ text }: { text: string }) => {
     const { data: currentUser } = useCurrentUser();
     const loginModal = useLoginModal();

     const onTweet = () => {
          if (!currentUser) {
               loginModal.onOpen();
          }
     };

     return (
          <div
               onClick={onTweet}
               className={`ml-2 bg-sky-500 hover:bg-sky-600 transition-all cursor-pointer active:bg-sky-500 ${
                    text === "Tweet" ? "w-[45px] md:w-[200px]" : " w-full"
               }   rounded-3xl py-2 `}>
               <p className="text-lg text-white text-center hidden md:block">
                    {text}
               </p>
               <div className="md:hidden ml-[10px]">
                    <TiMessage color="white" size={25} />
               </div>
          </div>
     );
};

export default TweetButton;
