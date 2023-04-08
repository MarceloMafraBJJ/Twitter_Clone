import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Layout from "../components/Layout";

import LoginModal from "@/components/models/LoginModal";
import RegisterModal from "@/components/models/RegisterModal";
import EditModal from "@/components/models/EditModal";

import { Toaster } from "react-hot-toast";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster />

      <RegisterModal />
      <LoginModal />
      <EditModal />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
