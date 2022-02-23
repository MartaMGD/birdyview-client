import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function RegisterCard() {
    // States for the user creation
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const sendNewUser = (event) => {
        event.preventDefault();

        const registered = {
            firstname: firstName,
            lastname: lastName,
            username: username,
            email: email,
            password: password
        }

        axios.post("http://localhost:5000/users", registered)
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
                        <span className="inputTextPlaceholders">Nombre: </span>
                        <input className="loginInputStyle"
                            type="text"
                            placeholder="Introduce tu nombre"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)} />
                    </div>

                    <div>
                        <span className="inputTextPlaceholders">Apellido: </span>
                        <input className="loginInputStyle"
                            type="text"
                            placeholder="Introduce tu apellido"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)} />
                    </div>

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