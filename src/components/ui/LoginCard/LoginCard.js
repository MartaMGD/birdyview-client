import '../../../css/LoginCard.css';

export default function LoginCard() {
    return (
        <main>
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

                <span className="loginSpanStyle">¿Has olvidado tu contraseña?</span>
                <span className="loginSpanStyle">¿Aún no tienes una cuenta? Regístrate</span>

                <input className="loginButtonStyle" type="submit" value="Enviar" />
            </form>
        </main>
    )
}
