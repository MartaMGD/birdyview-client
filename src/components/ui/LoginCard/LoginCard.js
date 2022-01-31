import { useState } from 'react'
import { Link } from 'react-router-dom'
import { users } from '../../../data/hardcodeddata'
import { useNavigate } from 'react-router-dom'

export default function LoginCard(props) {
    const navigate = useNavigate()
    const usuarios = users
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    console.log('EMAIL ====>', email)
    console.log('PASS ====>', pass)

    const enviarDatos = () => {
        let index = usuarios.findIndex(obj => obj.email === email && obj.pass === pass)
        if (index !== -1) {
            console.log('USUARIO CORRECTO')
            props.setUserSession({
                status: true,
                token: 'token123',
                name: users[index].nombre,
                email: users[index].email,
                admin: users[index].admin
            })
            navigate('/avistamientos')
        } else {
            alert('USUARIO INCORRECTO')
        }
    }

    return (
        <main>
            <form className="loginRegisterCard">

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
                            type="password" value={pass}
                            onChange={(e) => setPass(e.target.value)}
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

                    <input onClick={enviarDatos} className="loginButtonStyle" type="submit" value="Enviar" />
                </div>
            </form>
        </main>
    )
}
