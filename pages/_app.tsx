import "./../style/base.css";
import "./../assets/fonts/fonts.css";
import "./../style/colours.css";
import "./../style/header.css";
import "./../style/spacing.css";
import "./../style/cards.css";

import Header from "./../components/header";
import Footer from "./../components/footer";

export default function App({Component, pageProps}): JSX.Element {
    return (
        <>
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