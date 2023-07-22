import React from "react";
import { Bars } from "react-loader-spinner";
import { getLoaderSize } from "../../utils/utils.ts";

interface LoaderProps {
     size: "lg" | "md" | "s";
}

const Loader: FC<LoaderProps> = ({ size }) => {
     return (
          <Bars
               height={getLoaderSize(size)}
               width={getLoaderSize(size)}
               color="rgb(29, 155, 240)"
               ariaLabel="bars-loading"
               wrapperStyle={{}}
               wrapperClass=""
               visible={true}
          />
     );
};

export default Loader;
