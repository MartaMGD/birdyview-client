import { Link } from 'react-router-dom';
import '../../../css/LoginCard.css';

export default function LoginCard(props) {
    return (
        <main>
            <form className="loginRegisterCard">

                <div className="cardImage"></div>

                <div className="formContentWrap">
                    <span className="loginMessage">{props.loginMessage}</span>

                    <div>
                        <input className="loginInputStyle"
                            type="text"
                            placeholder={props.firstInputText} />
                    </div>

                    <div>
                        <input className="loginInputStyle"
                            type="text"
                            placeholder={props.secondInputText} />

                    </div>

                    <span className="loginSpanStyle">
                        <Link
                            to="/recuperarpassword">
                            ¿Has olvidado tu contraseña?
                        </Link>
                    </span>

                    <span className="loginSpanStyle">
                        <Link
                            to="/registernewuser">
                            ¿Aún no tienes una cuenta? Regístrate
                        </Link>
                    </span>

                    <input className="loginButtonStyle" type="submit" value="Enviar" />
                </div>
            </form>
        </main>
    )
}
