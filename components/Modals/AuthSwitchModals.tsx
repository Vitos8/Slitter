import React from "react";
import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";

const AuthSwitchModals = ({ to, text }: { to: string; text: string }) => {
     const loginModal = useLoginModal();
     const registerModal = useRegisterModal();

     const SwitchModals = () => {
          if (to === "Login") {
               registerModal.onClose();
               loginModal.onOpen();
               return;
          }

          registerModal.onOpen();
          loginModal.onClose();
     };
     return (
          <span
               onClick={SwitchModals}
               className="text-sky-600 text-xm cursor-pointer flex justify-end hover:underline">
               {text}
          </span>
     );
};

export default AuthSwitchModals;
