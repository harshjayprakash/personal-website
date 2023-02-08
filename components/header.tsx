export default function Header(): JSX.Element {
    return (
        <header className="header">
            <span className="header__logo">Harsh.</span>
            <input type="checkbox" id="header__nav-toggle" className="header__nav-toggle"/>
            <nav className="header__nav">
                <a className="header__nav-link" href="/">Home</a>
                <a className="header__nav-link" href="/projects">Projects</a>
                <a className="header__nav-link" href="/about">About</a>
            </nav>
            <label htmlFor="header__nav-toggle" className="header__nav-label">
                <span className="header__nav-label__design"></span>
            </label>
        </header>
    );
}