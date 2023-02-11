import "./../style/base.css";
import "./../assets/fonts/fonts.css";
import "./../style/colours.css";
import "./../style/header.css";
import "./../style/spacing.css";
import "./../style/cards.css";
import "./../style/links.css";

import Header from "./../components/header";
import Footer from "./../components/footer";

import Head from "next/head";

export default function App({Component, pageProps}): JSX.Element {
    return (
        <>
        <Head>
            <title>Harsh.</title>
            <link rel="icon" type="image/png" href="/favicon-192.png" />
        </Head>
        <Header />
        <br/><br/><br/>
        <main className="content">
        <Component {...pageProps} />
        </main>
        <br/><br/>
        <Footer />
        </>
    );
}