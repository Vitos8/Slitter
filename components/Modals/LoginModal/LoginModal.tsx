import React from "react";
import useLoginModal from "../../../hooks/useLoginModal";
import { DataLogin } from "@/types/types";
import Modal from "../Modal";
import LoginBody from "./LoginBody";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";

const LoginModal = () => {
     const loginModal = useLoginModal();

     const onLoginSubmit = async (data: DataLogin) => {
          try {
               const id = toast.loading("Please wait...");
               
               signIn("credentials", {
                    //redirect: false,
                    email: data.email,
                    password: data.password,
               })
                    .then((res) => {
                         toast.update(id, {
                              render: "Signed in ! 👌",
                              type: "success",
                              isLoading: false,
                              autoClose: 3000
                         });
                    })
                    .catch((err) => {
                         toast.update(id, {
                              render: "Something went wrong 🤯",
                              type: "error",
                              isLoading: false,
                              autoClose: 3000
                         });
                    });
               loginModal.onClose();
          } catch (error) {
               console.log(error);
          }
     };

     return (
          <Modal
               onClose={loginModal.onClose}
               isOpen={loginModal.isOpen}
               onSubmit={onLoginSubmit}
               actionLabel="Log in"
               title="Log in to TwitterClone"
               body={<LoginBody />}
          />
     );
};

export default LoginModal;
