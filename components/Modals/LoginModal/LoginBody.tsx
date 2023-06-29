import React from "react";
import { useFormContext } from "react-hook-form";
import AuthSwitchModals from "../AuthSwitchModals";

const LoginBody = () => {
     const {
          register,
          formState: { errors },
     } = useFormContext();

     return (
          <div className="mt-[36px] mb-[25px]">
               <div className="mb-5">
                    <input
                         type="text"
                         className={`login-input ${
                              errors?.email ? "input-error" : ""
                         }  `}
                         placeholder="Email address"
                         {...register("email", { required: true })}
                    />
                    <div className="text-error">
                         {errors?.email && "Email is required !"}
                    </div>
               </div>
               <div className="">
                    <input
                         type="password"
                         className={`login-input ${
                              errors?.password ? "input-error" : ""
                         }  `}
                         placeholder="Password"
                         {...register("password", { required: true })}
                    />
                    <div className="text-error">
                         {errors?.password && "Password is required !"}
                    </div>
               </div>
               <AuthSwitchModals to="Register" text="Register to TwitterClone" />
          </div>
     );
};

export default LoginBody;
