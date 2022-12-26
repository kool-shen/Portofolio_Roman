import Head from "next/head";

import Homepage from "../components/Homepage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Roman Cadre portofolio</title>
        <meta name="description" content="Roman Cadre portofolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homepage />
    </>
  );
}
