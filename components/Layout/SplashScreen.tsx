import React, { useEffect, useState } from "react";
import Loader from "@/components/Loader/Loader";

function SplashScreen() {
     return  (
          <div className="h-full w-full  fixed z-[13] bg-white">
			<div className="flex flex-col items-center justify-center mt-[200px]">
				<h1 className="text-5xl font-extrabold text-sky-600 mb-2">TwitterClone</h1>
				<p className="text-lg mb-8 font-bold">Created by Vitalik Golubovich</p>
                    <Loader size='lg'/>
			</div>
		</div>
     ) ;
}

export default SplashScreen;