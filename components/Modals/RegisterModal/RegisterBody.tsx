import React from "react";
import { useFormContext } from "react-hook-form";
import AuthSwitchModals from "../AuthSwitchModals";

const RegisterBody = () => {
     const {
          register,
          formState: { errors },
     } = useFormContext();

     return (
          <div className="mt-[36px] mb-[25px]">
               <div className="mb-3">
                    <input
                         type="text"
                         className={`login-input ${
                              errors?.email?.type === "required" ||
                              errors?.email?.type === "pattern"
                                   ? "input-error"
                                   : ""
                         }  `}
                         placeholder="Email address"
                         {...register("email", {
                              required: true,
                              pattern: {
                                   value: /\S+@\S+\.\S+/,
                                   message: "Invalid email",
                              },
                         })}
                    />
                    <div className="text-error">
                         {errors?.email?.type === "required" &&
                              "This field is required !"}
                         {errors?.email?.type === "pattern" &&
                              String(errors?.email.message)}
                    </div>
               </div>
               <div className="mb-3">
                    <input
                         type="text"
                         className={`login-input ${
                              errors?.name ? "input-error" : ""
                         }  `}
                         placeholder="Your name"
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
                              : ""}
                    </div>
               </div>
               <div className="mb-3">
                    <input
                         type="text"
                         className={`login-input ${
                              errors?.username ? "input-error" : ""
                         }  `}
                         placeholder="Your username"
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
                              : ""}
                    </div>
               </div>
               <div className="mb-3">
                    <input
                         type="password"
                         className={`login-input ${
                              errors?.password?.type === "pattern" ||
                              errors.password?.type === "required"
                                   ? "input-error"
                                   : ""
                         }  `}
                         placeholder="Password"
                         {...register("password", {
                              pattern: {
                                   value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/,
                                   message: "Minimum five characters, at least one letter and one number !",
                              },
                              required: true,
                         })}
                    />
                    <div className="text-error text-sm">
                         {errors?.password?.type === "required" &&
                              "This field is required !"}
                         {errors?.password?.type === "pattern" &&
                              String(errors?.password?.message)}
                    </div>
               </div>
               <AuthSwitchModals to="Login" text="Log in to TwitterClone" />
          </div>
     );
};

export default RegisterBody;
