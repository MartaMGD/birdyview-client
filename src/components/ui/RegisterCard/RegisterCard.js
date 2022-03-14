import axios from 'axios';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function RegisterCard() {
    // States for the user creation | Estados para guardar y crear nuevos usuarios
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const sendNewUser = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post("http://localhost:5000/api/auth/register", {
                username,
                email,
                password
            });
            res.data && navigate('/login');
        } catch (err) {
            setError(true);
        }
    };

    return (
        <main className="loginWrapper">
            <form onSubmit={sendNewUser} className="loginRegisterCard">

                <div className="cardImage"></div>

                <div className="formContentWrap">
                    <h3 className="registerMessage">Crea una cuenta</h3>

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
                    {error && <span> Por favor, rellena todos los campos </span>}
                </div>
            </form>
        </main >
    )
}