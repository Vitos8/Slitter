import React, { FC, useCallback } from "react";
import { BsTwitter } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { useForm, FormProvider} from "react-hook-form";

interface IModalProps {
     isOpen?: boolean;
     onClose: () => void;
     onSubmit: (data: any) => void;
     body?: JSX.Element;
     actionLabel?: string;
     title?: string;
     disabled?: boolean;
}

const Modal: FC<IModalProps> = ({
     disabled,
     isOpen,
     onClose,
     onSubmit,
     body,
     actionLabel,
     title,
}) => {
     const methods = useForm({mode: "onChange"});

     const handleClose = useCallback(() => {
          if (disabled) {
               return;
          }

          onClose();
     }, [onClose, disabled]);

     return (
          <>
               {isOpen && (
                    <FormProvider {...methods}>
                         <form onSubmit={methods.handleSubmit(onSubmit)}>
                              <div className="absolute bg-sky-100/70 h-screen top-0 left-0 right-0 bottom-0 w-screen flex justify-center items-center  z-[15]">
                                   <div className="bg-white shadow-xl rounded-lg  w-[700px]    ">
                                        <div className="p-5 pb-[40px]">
                                             <div className="flex justify-between">
                                                  <div className=""></div>
                                                  <GrClose
                                                       size={25}
                                                       color="white"
                                                       className="cursor-pointer"
                                                       onClick={handleClose}
                                                  />
                                             </div>
                                             <div className="w-[450px] mx-auto mb-5">
                                                  <BsTwitter
                                                       color="rgb(29, 155, 240)"
                                                       size={38}
                                                       className="mb-4"
                                                  />
                                                  <h2 className="text-2xl font-extrabold font-sans">
                                                       {title}
                                                  </h2>
                                                  <div className="">{body}</div>
                                                  <div className="flex justify-center">
                                                       <button
                                                            type="submit"
                                                            disabled={disabled}
                                                            className="w-full rounded-full bg-sky-500 py-2  text-white text-lg font-sans mt-2 hover:bg-sky-600 transition-all active:bg-sky-500">
                                                            {actionLabel}
                                                       </button>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </form>
                    </FormProvider>
               )}
          </>
     );
};

export default Modal;
