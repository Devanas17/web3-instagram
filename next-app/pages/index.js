import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "../components/Header";
import Feed from "../components/Feed";
import { useAppContext } from "../context/context";
import Login from "../components/Login";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { currentAccount } = useAppContext();

  return (
    <>
      <Head>
        <title>Instagram</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!currentAccount ? (
        <Login />
      ) : (
        <div>
          <Header />
          <Feed />
        </div>
      )}
    </>
  );
}
