import LoginCard from '../components/ui/LoginCard/LoginCard';

export default function LoginScreen(props) {

    return (
        <main className="loginBackground loginContainer">
            <LoginCard
                // aquí pasamos la sesión al loginCard
                setUserSession={props.setUserSession}
                loginMessage="Inicia Sesión"
                firstInputText="Introduce tu correo electrónico"
                secondInputText="Contraseña" />
        </main>
    )
}
