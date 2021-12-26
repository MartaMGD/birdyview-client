import '../css/globalstyle.css';
import '../css/LoginScreen.css';

import LoginCard from '../components/ui/LoginCard/LoginCard';

export default function LoginScreen() {
    return (
        <main className="loginBackground loginContainer">
            <LoginCard
            loginMessage="Recupera tu contraseña"
            firstInputText="Introduce tu nombre de usuario"
            secondInputText="Introduce tu correo electrónico"/>
        </main>
    )
}