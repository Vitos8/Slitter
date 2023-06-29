import { FC } from "react";
import Sidebar from "./Layout/Sidebar";
import Follows from "./Follows/Follows";

interface LayoutProps {
     children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
     return (
	<div className="h-screen">
		<div className="container max-w-6xl px-[10px] md:px-[5px] mx-auto h-full">
			<div className="grid grid-cols-[60px_1fr]  lg:grid-cols-[1fr_2fr_1fr]  md:grid-cols-[260px_1fr]  h-full">
				<Sidebar/>
				<div className="border-white-900 border-x-[1px]">
				{children}
				</div>
				<div className="h-full hidden lg:block">
					<Follows/>	
				</div>
			</div>
		</div>
	</div>
	);
};

export default Layout;
