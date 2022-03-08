import userimage from '../assets/avatars/userimage.jpeg';

export default function UserDashboard() {
    return (
        <main className="container">
            <div className="dashboardContainer">

                <h3 className="dashboardTextStyle">Mi cuenta</h3>

                <div className="welcomePanelStyle">
                    <img className="profilePhoto" src={userimage}
                        alt="Profile" />
                    <h4>Bienvenido</h4>
                </div>

                <div className="userPanelStyle">
                    <h4> Actualiza tus preferencias </h4>
                    <form>

                        <div className="formContentWrap">

                            <div>

                                <input className="dashboardInputStyle"
                                    type="text"
                                    placeholder="María" />
                            </div>

                            <div>

                                <input className="dashboardInputStyle"
                                    type="text"
                                    placeholder="García García" />
                            </div>


                            <div>

                                <input className="dashboardInputStyle"
                                    type="email"
                                    placeholder="maria@gmail.com" />
                            </div>

                            <div>

                                <input className="dashboardInputStyle"
                                    type="password"
                                    placeholder="Contraseña" />
                            </div>

                            <div>

                                <input className="dashboardInputStyle"
                                    type="password"
                                    placeholder="Nueva contraseña" />
                            </div>


                            <div>

                                <input className="dashboardInputStyle"
                                    type="date"
                                    placeholder="01/02/1990" />
                            </div>

                            <input className="loginButtonStyle" type="submit" value="Actualizar" />
                        </div>
                    </form>
                </div>

            </div>
        </main>
    )


}
