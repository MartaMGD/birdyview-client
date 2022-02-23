import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function LoginCard(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log('EMAIL ====>', email)
    console.log('PASS ====>', password)

    async function loginUser(event) {
        event.preventDefault();

        const response = await fetch("http://localhost:5000/users/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password
            }),
        });

        const data = await response.json();

        if(data.user) {
            alert('Has iniciado sesión.')
            window.location.href = '/avistamientos'
        } else {
            alert('Datos erróneos. Comprueba tu email y usuario.');
        }

    }

    return (
        <main>
            <form onSubmit={loginUser} className="loginRegisterCard">

                <div className="cardImage" />

                <div className="formContentWrap">
                    <span className="loginMessage">{props.loginMessage}</span>

                    <div>
                        <input className="loginInputStyle"
                            type="email" value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={props.firstInputText} />
                    </div>

                    <div>
                        <input className="loginInputStyle"
                            type="password" value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder={props.secondInputText} />
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

                    <input className="loginButtonStyle" type="submit" value="Enviar" />
                </div>
            </form>
        </main>
    )
}
