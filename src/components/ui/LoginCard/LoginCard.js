import { Link } from 'react-router-dom'
import { useRef, useContext } from 'react';
import { useNavigate } from 'react-router';
import { Context } from '../../../context/Context';
import axios from 'axios';

export default function LoginCard() {
    const navigate = useNavigate();
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            })
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            navigate("/avistamientos");
        } catch (err) {
            alert("Las credenciales son erróneas");
            navigate("/login");
            dispatch({ type: "LOGIN_FAILURE"});
        }
    };

    return (
        <main>
            <form className="loginRegisterCard"
                onSubmit={handleSubmit}>

                <div className="cardImage" />

                <div className="formContentWrap">
                    <span className="loginMessage">Inicia sesión</span>

                    <div>
                        <input className="loginInputStyle"
                            type="text"
                            placeholder="Nombre de usuario"
                            ref={userRef} />
                    </div>

                    <div>
                        <input className="loginInputStyle"
                            type="password"
                            placeholder="Contraseña"
                            ref={passwordRef} />
                    </div>

                    <span className="loginSpanStyle">
                        <Link to="/recuperarpassword">
                            ¿Has olvidado tu contraseña?
                        </Link>
                    </span>

                    <span className="loginSpanStyle">
                        <Link to="/registernewuser">
                            ¿Aún no tienes una cuenta? Regístrate
                        </Link>
                    </span>

                    <input className="loginButtonStyle" type="submit" value="Enviar" disabled={isFetching} />
                </div>
            </form>
        </main>
    )
}

