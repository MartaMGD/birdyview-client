import { Link, Outlet } from 'react-router-dom';

export default function Navbar() {
    return (
        <header>
            <nav className="navBarContainer">

                <div className="logoStyle">
                    <Link
                        to="/">
                        Logo
                    </Link>
                </div>

                <label className="openMenuIcon" htmlFor="openMenu">
                    <i className="fas fa-bars"></i>
                </label>
                <input className="openMenu" type="checkbox" id="openMenu" />



                <ul className="linkPosition">

                    <li className="linkUnit">
                        <Link
                            to="/search">
                            Búsqueda
                        </Link>
                    </li>

                    <li className="linkUnit">
                        <Link
                            to="/articulos">
                            Blog
                        </Link>
                    </li>

                    <li className="linkUnit">
                        <Link
                            to="/avistamientos">
                            Avistamientos
                        </Link>
                    </li>

                    <li className="linkUnit">
                        <Link
                            to="/about">
                            About
                        </Link>
                    </li>

                    <li className="linkUnit">
                        <Link
                            to="/login">
                            Accede / Registro
                        </Link>
                    </li>
                </ul>

                <section>
                    <Outlet />
                </section>
            </nav>
        </header>
    )
}
