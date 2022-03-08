import { Link, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../../context/Context';
import { useNavigate } from 'react-router';
import BirdyViewLogo from '../../../assets/images/BirdyViewLogo.png';

export default function Navbar() {
    const { user, dispatch } = useContext(Context);
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
        navigate('/login');
    }

    return (
        <header>
            <nav className="navBarContainer">

                <div>
                    <Link to="/">
                        <img className="logoStyle"
                            src={BirdyViewLogo}
                            alt="Logo de marca" />
                    </Link>
                </div>

                <label className="openMenuIcon" htmlFor="openMenu">
                    <i className="fas fa-bars" />
                </label>
                <input className="openMenu" type="checkbox" id="openMenu" />


                <ul className="linkPosition">

                    <li className="linkUnit">
                        <Link to="/search">
                            Búsqueda
                        </Link>
                    </li>

                    <li className="linkUnit">
                        <Link to="/articulos">
                            Blog
                        </Link>
                    </li>

                    <li className="linkUnit">
                        <Link to="/avistamientos">
                            Avistamientos
                        </Link>
                    </li>

                    <li className="linkUnit">
                        <Link to="/userdashboard">
                            Mi cuenta
                        </Link>
                    </li>


                    <li className="linkUnit">
                        <a
                            onClick={handleLogout}>
                            {user && "Cerrar sesión"}
                            <Link to="/login">
                                Accede / Regístrate
                            </Link>
                        </a>

                    </li>
                </ul>

                <section>
                    <Outlet />
                </section>
            </nav>
        </header>
    )
}
