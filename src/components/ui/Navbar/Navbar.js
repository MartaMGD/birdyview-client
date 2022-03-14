import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { Context } from '../../../context/Context';
import BirdyViewLogo from '../../../assets/images/BirdyViewLogo.png';

export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const navigate = useNavigate();

    const { user, dispatch } = useContext(Context);

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
        navigate('/login');
    }

    const toggleNav = () => {
        setToggleMenu(!toggleMenu);

    }

    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])

    const handleLink = () => {
        window.location.reload();
    }

    return (

        <nav>
            {(toggleMenu || screenWidth > 500) && (

                <ul className="list">
                    <div>
                        <Link
                            to="/">
                            <img className="logoStyle"
                                src={BirdyViewLogo}
                                alt="Logo de marca" />
                        </Link>
                    </div>

                    <div className="linkList">
                        <li className="items">
                            <Link

                                to="/search">
                                Búsqueda
                            </Link>
                        </li>

                        {user && <li className="items">
                            <Link

                                to="/articulos">
                                Blog
                            </Link>
                        </li>}

                        {user && <li className="items">
                            <Link

                                to="/avistamientos">
                                Avistamientos
                            </Link>
                        </li>}

                        {user && <li className="items">
                            <Link

                                to="/userdashboard">
                                Mi cuenta
                            </Link>
                        </li>}

                        <li className="items">
                            {!user && <a>
                                <Link
    
                                    to="/login">
                                    Inicia sesión / Regístrate
                                </Link>
                            </a>}

                            {user &&
                                <a onClick={handleLogout}>
                                    <Link
        
                                        to="/login">
                                        Cerrar sesión
                                    </Link>
                                </a>
                            }
                        </li>
                    </div>
                </ul>
            )
            }

            <button onClick={toggleNav} className="btn"><i class="fa-solid fa-bars"></i></button>
        </nav >
    )
}
