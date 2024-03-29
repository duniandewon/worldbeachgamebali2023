import Head from "next/head";

import { ReactNode } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Props {
  children: ReactNode;
  title: string;
}

const Wrapper = ({ children, title }: Props) => {
  return (
    <div className="wrapper">
      <Head>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title} | World Beach Game Bali 2023</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Wrapper;
