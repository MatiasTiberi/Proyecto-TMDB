import Head from "next/head";
import Navbar from "./navBar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Proyecto TMDB</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="UTF-8" />
        <meta name="description" content="Proyecto utilizando la API de TMDB" />
        <meta name="author" content="Matias Tiberi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>{children}</main>
    </>
  );
}
