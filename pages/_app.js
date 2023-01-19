import "../styles/globals.css";
import Head from "next/head";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import hoverDisplay from "../reducers/hoverDisplay";
import albumGenerator from "../reducers/albumGenerator";
import imageFocus from "../reducers/imageFocus";
import getIndex from "../reducers/getIndex";

const store = configureStore({
  reducer: { hoverDisplay, albumGenerator, imageFocus, getIndex },
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Roman Cadre portofolio</title>
        <meta name="description" content="Roman Cadre portofolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
