import Head from "next/head";
import Hero from "@/components/Hero";

import AboutDogs from "@/components/AboutDogs";

import Breeds from "@/components/Breeds";

export default function Home() {
  return (
    <>
      <Head>
        <title>practice page</title>
      </Head>
      <Hero />

      <Breeds />
    </>
  );
}
