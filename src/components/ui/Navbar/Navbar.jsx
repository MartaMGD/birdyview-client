import { Link, Outlet, useNavigate } from 'react-router-dom'
import BirdyViewLogo from '../../../assets/images/BirdyViewLogo.png'

export default function Navbar(props) {
    const navigate = useNavigate()
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

                    {props.userSession.status &&
                        <li className="linkUnit">
                            <Link to="/avistamientos">
                                Avistamientos
                            </Link>
                        </li>
                    }

                    {props.userSession.status &&
                        <li className="linkUnit">
                            <Link to="/userdashboard">
                                Mi cuenta
                            </Link>
                        </li>
                    }

                    <li className="linkUnit">
                        {props.userSession.status
                            ? <a onClick={() => {
                                props.setUserSession({
                                    status: false,
                                    token: '',
                                    name: '',
                                    email: '',
                                    admin: false
                                })
                                navigate('/')
                            }}>
                                Cerrar sesión
                            </a>
                            : <Link to="/login">
                                Accede / Regístrate
                            </Link>
                        }
                    </li>
                </ul>

                <section>
                    <Outlet />
                </section>
            </nav>
        </header>
    )
}
