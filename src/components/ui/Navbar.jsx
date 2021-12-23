import { Link, Outlet } from 'react-router-dom';

export default function Navbar() {
    return (
        <main>
            <nav>
                <Link className="navBarLogo" to="/">
                    Logo
                </Link>

                <Link to="/">
                    Búsqueda
                </Link>

                <Link to="/articulos">
                    Artículos
                </Link>

                <Link to="/avistamientos">
                    Avistamientos
                </Link>

                <Link to="/about">
                    About
                </Link>

                <Link to="/login">
                    Accede/Registro
                </Link>
            </nav>
            <section>
                <Outlet/>
            </section>
        </main>
    )
}
