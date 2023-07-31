import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import LoginModal from "@/components/Modals/LoginModal/LoginModal";
import RegisterModal from "@/components/Modals/RegisterModal/RegisterModal";
import { SessionProvider } from "next-auth/react";
import SplashScreen from "@/components/Layout/SplashScreen";
import { useEffect, useState } from "react";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useRouter } from "next/router";
import EditModal from "@/components/Modals/EditModal/EditModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

export default function App({ Component, pageProps }: AppProps) {
     const [isLoading, setIsLoading] = useState(false);
     const { data: currentUser } = useCurrentUser();
     const router = useRouter();

     useEffect(() => {
          //const splashShown = sessionStorage.getItem("splashShown");

          //if (!currentUser) {
          //     router.push("/");
          //}

          //if (!splashShown) {
          //     setIsLoading(true);
          //     sessionStorage.setItem("splashShown", "true");
          //}
          //setTimeout(() => {
          //     setIsLoading(false);
          //}, 4000);
     }, []);

     return (
          <ErrorBoundary>
               {/*<SessionProvider session={pageProps.session}>*/}
               <LoginModal />
               <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover
                    theme="colored"
               />
               <RegisterModal />
               <EditModal />
               {/*{isLoading && <SplashScreen />}*/}
               <Layout>
                    <Component {...pageProps} />
               </Layout>
               {/*</SessionProvider>*/}
          </ErrorBoundary>
     );
}
