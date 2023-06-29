import Image from "next/image";
import { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useFormContext } from "react-hook-form";

interface DropzoneProps {
     label: string;
     value?: string;
     disabled?: boolean;
}

const ImageUpload: React.FC<DropzoneProps> = ({ label, value, disabled }) => {
     const [base64, setBase64] = useState("");
	const  {setValue, getValues} = useFormContext();

	useEffect(() => {
		const defaultValue = getValues(String(value));
		setBase64(defaultValue ? defaultValue : '');
	}, [])
	

     const handleDrop = (files: any) => {
          const file = files[0];
          const reader = new FileReader();
          reader.onload = (event: any) => {
               setBase64(event.target.result);	
			setValue(String(value), event.target.result)
          };
          reader.readAsDataURL(file);
     };

     const { getRootProps, getInputProps } = useDropzone({
          maxFiles: 1,
          onDrop: handleDrop,
          disabled,
          accept: {
               "image/jpeg": [],
               "image/png": [],
          },
     });

     return (
          <div
               {...getRootProps({
                    className:
                         "w-full p-4 text-white text-center border-2 border-dotted rounded-md border-neutral-300",
               })}>
               <input {...getInputProps()} />
               {base64 ? (
                    <div className="flex items-center justify-center">
                         <Image
                              src={base64}
                              height="100"
                              width="100"
                              alt="Uploaded image"
                         />
                    </div>
               ) : (
                    <p className="text-neutral-300">{label}</p>
               )}
          </div>
     );
};

export default ImageUpload;
