import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function RegisterCard() {
    // States for the user creation
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const sendNewUser = (e) => {
        e.preventDefault();

        const registered = {
            username: username,
            email: email,
            password: password
        }

        axios.post("http://localhost:5000/api/auth/register", registered)
            .then(response => console.log(response.data))

        navigate('/login');


    }

    return (
        <main className="loginWrapper">
            <form onSubmit={sendNewUser} className="loginRegisterCard">

                <div className="cardImage"></div>

                <div className="formContentWrap">
                    <span className="registerMessage">Crea una cuenta</span>

                    <div>
                        <span className="inputTextPlaceholders">Nombre de usuario: </span>
                        <input className="loginInputStyle"
                            type="text"
                            placeholder="Crea un nombre de usuario"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                    </div>

                    <div>
                        <span className="inputTextPlaceholders">Correo electrónico: </span>
                        <input className="loginInputStyle"
                            type="email"
                            placeholder="Introduce tu correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>


                    <div>
                        <span className="inputTextPlaceholders">Contraseña: </span>
                        <input className="loginInputStyle"
                            type="password"
                            placeholder="Crea una contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <input className="loginButtonStyle" type="submit" value="Enviar" />
                </div>
            </form>
        </main >
    )
}