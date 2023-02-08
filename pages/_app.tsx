import "./../style/base.css";
import "./../assets/fonts/fonts.css";
import "./../style/colours.css";

import Header from "./../components/header";
import Footer from "./../components/footer";

export default function App(): JSX.Element {
    return (
        <>
        <Header />
        <h1>Application</h1>
        <Footer />
        </>
    );
}