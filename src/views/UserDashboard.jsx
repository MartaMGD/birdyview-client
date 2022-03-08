import userimage from '../assets/avatars/userimage.jpeg';
import { useContext } from 'react';
import { Context } from '../context/Context';

export default function UserDashboard() {
    const { user } = useContext(Context);
    return (
        <main className="container">
            <div className="dashboardContainer">

                <h3 className="dashboardTextStyle">Mi cuenta</h3>

                <div className="welcomePanelStyle">
                    <img className="profilePhoto" src={userimage}
                        alt="Profile" />
                    <h4>Bienvenido, {user.username}</h4>
                </div>

                <div className="userPanelStyle">
                    <h4> Actualiza tus preferencias </h4>
                    <form>

                        <div className="formContentWrap">

                            <div>

                                <input className="dashboardInputStyle"
                                    type="text"
                                    placeholder="Nombre de usuario" />
                            </div>


                            <div>

                                <input className="dashboardInputStyle"
                                    type="email"
                                    placeholder="Introduce un nuevo correo electrónico" />
                            </div>

                            <div>

                                <input className="dashboardInputStyle"
                                    type="password"
                                    placeholder="Cambia tu contraseña" />
                            </div>

                            <div>

                                <input className="dashboardInputStyle"
                                    type="password"
                                    placeholder="Nueva contraseña" />
                            </div>

                            <input className="loginButtonStyle" type="submit" value="Actualizar" />
                        </div>
                    </form>
                </div>

            </div>
        </main>
    )


}
