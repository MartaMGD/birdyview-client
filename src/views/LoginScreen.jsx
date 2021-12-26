import '../css/globalstyle.css';
import '../css/LoginScreen.css';

import LoginCard from '../components/ui/LoginCard/LoginCard';

export default function LoginScreen() {
    return (
        <main className="loginBackground loginContainer">
            <LoginCard
            loginMessage="Inicia Sesión"
            firstInputText="Introduce tu correo electrónico"
            secondInputText="Contraseña"/>
        </main>
    )
}
