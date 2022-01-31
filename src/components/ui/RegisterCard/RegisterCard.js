export default function RegisterCard() {
    return (
        <main className="loginWrapper">
            <form className="loginRegisterCard">

                <div className="cardImage"></div>

                <div className="formContentWrap">
                    <span className="registerMessage">Crea una cuenta</span>

                    <div>
                        <span className="inputTextPlaceholders">Nombre de usuario: </span>
                        <input className="loginInputStyle"
                            type="text"
                            placeholder="Crea un nombre de usuario" />
                    </div>

                    <div>
                        <span className="inputTextPlaceholders">Correo electrónico: </span>
                        <input className="loginInputStyle"
                            type="email"
                            placeholder="Introduce tu correo electrónico" />
                    </div>


                    <div>
                        <span className="inputTextPlaceholders">Contraseña: </span>
                        <input className="loginInputStyle"
                            type="password"
                            placeholder="Crea una contraseña" />
                    </div>

                    <input className="loginButtonStyle" type="submit" value="Enviar" />
                </div>
            </form>
        </main >
    )
}