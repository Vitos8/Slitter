import useCurrentUser from "@/hooks/useCurrentUser";
import useFollow from "@/hooks/useFollow";
import useLoginModal from "@/hooks/useLoginModal";
import axios from "axios";
import { FC, useEffect, useState, useMemo } from "react";
import { Bars, ColorRing } from "react-loader-spinner";

interface IFollowButtonProps {
     bgColorBlue?: boolean;
     userId: string;
}

const FollowButton: FC<IFollowButtonProps> = ({ bgColorBlue, userId }) => {
     const { isFollowing, toggleFollow, isLoading } = useFollow(userId);
     const [isLoadingBtn, setIsLoading] = useState(false);

     const onFollow = async () => {
          setIsLoading(true);
          await toggleFollow();
          setIsLoading(false);
     };

     return (
          <>
               {isFollowing ? (
                    <div
                         key={userId}
                         onClick={onFollow}
                         className={`cursor-pointer text-black  bg-zinc-300 py-1 w-20 text-center font-bold text-[12px] rounded-2xl hover:bg-zinc-400 active:bg-zinc-700`}>
                         {isLoadingBtn || isLoading ? (
                              <div className="flex justify-center">
                                   <ColorRing
                                        visible={true}
                                        height="25"
                                        width="25"
                                        ariaLabel="blocks-loading"
                                        wrapperStyle={{}}
                                        wrapperClass="blocks-wrapper"
                                        colors={[
                                             "#e15b64",
                                             "#f47e60",
                                             "#f8b26a",
                                             "#abbd81",
                                             "#849b87",
                                        ]}
                                   />
                              </div>
                         ) : (
                              "Followed"
                         )}
                    </div>
               ) : (
                    <div
                         onClick={onFollow}
                         className={`cursor-pointer  ${
                              bgColorBlue ? "bg-sky-600" : "bg-zinc-800"
                         } py-1 w-20 text-center text-white font-bold text-sm rounded-2xl hover:bg-zinc-600 active:bg-zinc-900`}>
                         {isLoading || isLoadingBtn ? (
                              <div className="flex justify-center">
                                   <ColorRing
                                        visible={true}
                                        height="25"
                                        width="25"
                                        ariaLabel="blocks-loading"
                                        wrapperStyle={{}}
                                        wrapperClass="blocks-wrapper"
                                        colors={[
                                             "#e15b64",
                                             "#f47e60",
                                             "#f8b26a",
                                             "#abbd81",
                                             "#849b87",
                                        ]}
                                   />
                              </div>
                         ) : (
                              "Follow"
                         )}
                    </div>
               )}
          </>
     );
};

export default FollowButton;
