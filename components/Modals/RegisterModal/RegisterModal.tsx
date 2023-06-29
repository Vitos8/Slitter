import { toast } from "react-toastify";
import { DataRegister } from "@/types/types";
import Modal from "../Modal";
import RegisterBody from "./RegisterBody";
import useRegisterModal from "../../../hooks/useRegisterModal";
import axios from "axios";
import { signIn } from "next-auth/react";

const RegisterModal = () => {
     const registerModal = useRegisterModal();

     const onLoginSubmit = async (data: DataRegister) => {
          try {

               await axios.post("/api/register", data);
               
                      
               const promise:any =  signIn("credentials", {
                    redirect: false,
                    email: data.email,
                    password: data.password,
                    method: "POST",
               });
               toast.promise(promise, {
                    pending: "Loading",
                    success: "Registered ! 👌",
                    error: "User with same email or username already exists ! 🤯",
               }, {
                    position: toast.POSITION.TOP_CENTER,}
               );     

               registerModal.onClose();
          } catch (e) {
               console.log(e);
          }
     };

     return (
          <Modal
               onClose={registerModal.onClose}
               isOpen={registerModal.isOpen}
               onSubmit={onLoginSubmit}
               actionLabel="Register"
               title="Register to TwitterClone"
               body={<RegisterBody />}
          />
     );
};

export default RegisterModal;
