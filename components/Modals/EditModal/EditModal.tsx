import useEditModal from "@/hooks/useEditModal";
import React from "react";
import Modal from "../Modal";
import EditModalBody from "./EditModalBody";
import axios from "axios";
import useCurrentUser from "@/hooks/useCurrentUser";
import useUser from "@/hooks/useUser";
import { toast } from "react-toastify";

const EditModal = () => {
     const { data: currentUser } = useCurrentUser();
     const { mutate: mutateUser } = useUser(currentUser?.id);
     const editModal = useEditModal();

     const onLoginSubmit = async ({
          name,
          username,
          bio,
          profileImage,
          coverImage,
     }: any) => {
          try {
               const id = toast.loading("Please wait...");
               axios.patch("/api/edit", {
                    name,
                    username,
                    bio,
                    profileImage,
                    coverImage,
               })
                    .then((res) => {
                         toast.update(id, {
                              render: "Form edited ! 👌",
                              type: "success",
                              isLoading: false,
                              autoClose: 3000,
                         });
                    })
                    .catch((err) => {
                         toast.update(id, {
                              render: "Something went wrong 🤯",
                              type: "error",
                              isLoading: false,
                              autoClose: 3000,
                         });
                    });

               mutateUser();

               editModal.onClose();
          } catch (error) {
               console.log(error);
          }
     };

     return (
          <Modal
               onClose={editModal.onClose}
               isOpen={editModal.isOpen}
               onSubmit={onLoginSubmit}
               actionLabel="Save"
               title="Edit your profile"
               body={<EditModalBody />}
          />
     );
};

export default EditModal;
