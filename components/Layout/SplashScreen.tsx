import React, { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";

function SplashScreen() {
     return  (
          <div className="h-full w-full  fixed z-[13] bg-white">
			<div className="flex flex-col items-center justify-center mt-[200px]">
				<h1 className="text-5xl font-extrabold text-sky-600 mb-2">TwitterClone</h1>
				<p className="text-lg mb-8 font-bold">Created by Vitalik Golubovich</p>
                    <Bars
                              height="100"
                              width="100"
                              color="rgb(29, 155, 240)"
                              ariaLabel="bars-loading"
                              wrapperStyle={{}}
                              wrapperClass=""
                              visible={true}
                         />
			</div>
		</div>
     ) ;
}

export default SplashScreen;