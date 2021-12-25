import '../../../css/LoginCard.css';

export default function LoginCard() {
    return (
        <main>
            <div className="loginWrapper">
                <form className="loginRegisterCard">
                    
                    <span className="loginMessage"> Inicia Sesión </span>
                    
                    <div>
                        <input className="loginInputStyle"
                            type="text"
                            placeholder="Introduce tu correo electrónico" />
                    </div>

                    <div>
                        <input className="loginInputStyle"
                            type="text"
                            placeholder="Contraseña" />

                    </div>

                    <span className="passwordRetrieve">¿Has olvidado tu contraseña?</span>

                    <input className="loginButtonStyle" type="submit" value="Enviar" />
                </form>
            </div>
        </main>
    )
}
