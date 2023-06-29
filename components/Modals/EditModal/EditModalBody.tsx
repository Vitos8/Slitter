import React, { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import ImageUpload from "../../ImageUpload/ImageUpload";
import useCurrentUser from "@/hooks/useCurrentUser";

const EditModalBody = () => {
     const {
          register,
          setValue,
          formState: { errors },
     } = useFormContext();
     const { data: currentUser } = useCurrentUser();

     useEffect(() => {
          setValue("name", currentUser.name);
          setValue("username", currentUser.username);
          setValue("bio", currentUser.bio);
          setValue("coverImage", currentUser.coverImage);
          setValue("profileImage", currentUser.profileImage);
     }, []);

     return (
          <div className="mt-[36px] mb-[25px]">
               <div className="mb-1">
                    <ImageUpload value="coverImage" label="Cover Image" />
               </div>
               <div className="mb-1">
                    <ImageUpload value="profileImage" label="Profile Image" />
               </div>
               <div className="">
                    <input
                         type="text"
                         className={`login-input ${
                              errors?.password ? "input-error" : ""
                         }  `}
                         placeholder="Name"
                         {...register("name", {
                              required: true,
                              pattern: {
                                   value: /^[^0-9]+$/,
                                   message: "Minimum 3 characters and no numbers !",
                              },
                              minLength: 3,
                         })}
                    />
                    <div className="text-error">
                         {errors?.name?.type === "required" &&
                              "This field is required !"}
                         {errors?.name?.type === "pattern" ||
                         errors?.name?.type === "minLength"
                              ? "Minimum 3 characters and no numbers !"
                              : ""}{" "}
                    </div>
               </div>
               <div className="">
                    <input
                         type="text"
                         className={`login-input ${
                              errors?.password ? "input-error" : ""
                         }  `}
                         placeholder="Username"
                         {...register("username", {
                              required: true,
                              minLength: 3,
                              pattern: /^(?=.*[A-Za-z])/,
                         })}
                    />
                    <div className="text-error">
                         {errors?.username?.type === "required" &&
                              "This field is required !"}
                         {errors?.username?.type === "minLength" ||
                         errors?.username?.type === "pattern"
                              ? "Minimum 3 characters and one letter !"
                              : ""}{" "}
                    </div>
               </div>
               <div className="">
                    <textarea
                         //type="text"
                         maxLength={100}
                         style={{ resize: "none" }}
                         className={`login-input focus:outline-none h-[100px] ${
                              errors?.password ? "input-error" : ""
                         }  `}
                         placeholder="Description"
                         {...register("bio")}
                    />
                    <div className="text-error">
                         {errors?.password && "Password is required !"}
                    </div>
               </div>
          </div>
     );
};

export default EditModalBody;
