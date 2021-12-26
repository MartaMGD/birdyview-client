import '../../../css/LoginCard.css';

export default function RegisterCard() {
    return (
        <main>
            <form className="loginRegisterCard">
                <span className="loginMessage">Crea una cuenta</span>

                <div>
                    <span className="inputTextPlaceholders">Nombre de usuario:</span>
                    <input className="loginInputStyle"
                        type="text"
                        placeholder="Crea un nombre de usuario" />
                </div>

                <div>
                    <span className="inputTextPlaceholders">Correo electrónico:</span>
                    <input className="loginInputStyle"
                        type="email"
                        placeholder="Introduce tu correo electrónico" />
                </div>


                <div>
                    <span className="inputTextPlaceholders">Contraseña:</span>
                    <input className="loginInputStyle"
                        type="password"
                        placeholder="Crea una contraseña" />
                </div>

                <input className="loginButtonStyle" type="submit" value="Enviar" />
            </form>
        </main>
    )
}