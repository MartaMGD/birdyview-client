import userimage from '../assets/avatars/userimage.jpg';
import { useContext } from 'react';
import { Context } from '../context/Context';

export default function UserDashboard() {
    const { user } = useContext(Context);
    return (
        <main className="container">
            <div className="dashboardContainer">

                <h2 className="dashboardTextStyle">Mi cuenta</h2>

                <div className="welcomePanelStyle">
                    <img className="profilePhoto" src={userimage}
                        alt="Profile" />
                    <h4>Hola, {user.username}</h4>
                </div>

                <div className="userPanelStyle">
                    <h4> Actualiza tus preferencias </h4>
                    <form>

                        <div className="formContentWrap">

                            <div>

                                <input className="dashboardInputStyle"
                                    type="text"
                                    placeholder={user.username} />
                            </div>


                            <div>

                                <input className="dashboardInputStyle"
                                    type="email"
                                    placeholder={user.email} />
                            </div>

                            <div>

                                <input className="dashboardInputStyle"
                                    type="password"
                                    placeholder={"Cambia tu contraseña"} />
                            </div>

                            <div>

                                <input className="dashboardInputStyle"
                                    type="password"
                                    placeholder="Introduce tu contraseña actual" />
                            </div>

                            <input className="loginButtonStyle" type="submit" value="Actualizar" />
                        </div>
                    </form>
                </div>

            </div>
        </main>
    )


}
