import { useRouter } from "next/router";
import { paths } from "./../data/paths";

export default function Header(): JSX.Element {
    const router = useRouter();

    var navLinks: Array<JSX.Element> = new Array<JSX.Element>();
    for (let i = 0; i < paths.length; i++) {
        navLinks.push(
            <a className={"header__nav-link" + ((router.pathname == paths[i].path) ? " header__nav-link-active" : "" )} href={paths[i].path}>{paths[i].name}</a>
        );
    }

    return (
        <header className="header">
            <span className="header__logo">Harsh.</span>
            <input type="checkbox" id="header__nav-toggle" className="header__nav-toggle"/>
            <nav className="header__nav">
                <>{navLinks}</>
            </nav>
            <label htmlFor="header__nav-toggle" className="header__nav-label">
                <span className="header__nav-label__design"></span>
            </label>
        </header>
    );
}