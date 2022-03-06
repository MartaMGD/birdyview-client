import { Routes, Route, BrowserRouter, Outlet, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Search from './views/Search';
import Articles from './views/Articles';
import Birdwatching from './views/Birdwatching';
import LoginScreen from './views/LoginScreen';
import Navbar from './components/ui/Navbar/Navbar';
import Footer from './components/ui/Footer/Footer';
import Home from './views/Home';
import RetrievePassword from './views/RetrievePassword';
import RegisterScreen from './views/RegisterScreen';
import UserDashboard from './views/UserDashboard';
import Birdpage from './views/Birdpage';
import BlogEntryPage from './views/BlogEntryPage';
import NewArticle from './views/NewArticle';
import EditArticle from './views/EditArticle';

export default function BirdyViewApp() {
    // FOR THE USER SESSION
    // En este hook creamos una sesión de usuario, al estar en el app.jsx lo tenemos "disponible" en toda la web
    const [userSession, setUserSession] = useState({
        status: false,
        token: '',
        name: '',
        email: '',
        admin: false
    })

    useEffect(() => {
        console.log('El valor de userSession es:', userSession)
    }, [userSession])

    function useAuth() {
        return userSession.status
    }

    // Esta función redirige al usuario al componente (panel de control) si está autenticado o sino lo deja en el login
    function PrivateOutlet() {
        const auth = useAuth()
        return auth ? <Outlet /> : <Navigate to="/login" />
    }

    // GLOBAL STATE TO SET AND EDIT ARTICLES
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/posts/")
            .then((response) => {
                setPosts(response.data)
            })
            .catch(error => {
                console.log(error)
            });
    }, []);

    return (
        <>
            <BrowserRouter>
                {/*aquí pasamos la sesión a la navbar*/}
                <Navbar userSession={userSession} setUserSession={setUserSession} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="search" element={<Search />} />
                    <Route path="birdpage/:birdId" element={<Birdpage />} />
                    <Route path="articulos" element={<Articles posts={posts}/>}  />
                    <Route path="articulos/:PostId" element={<BlogEntryPage posts={posts} />} />

                    {/*aquí pasamos la sesión al componente Login Screen*/}
                    <Route path="login" element={<LoginScreen setUserSession={setUserSession} />} />
                    <Route path="recuperarpassword" element={<RetrievePassword />} />
                    <Route path="registernewuser" element={<RegisterScreen />} />

                    {/*Esta es una ruta protegida: la del panel de usuario*/}
                    <Route path="avistamientos" element={<PrivateOutlet />}>
                        <Route path="" element={<Birdwatching userSession={userSession} />} />
                    </Route>

                    <Route path="articulos/nuevoarticulo" element={<PrivateOutlet />}>
                        <Route path="" element={<NewArticle userSession={userSession} />} />
                    </Route>
                    <Route path="articulos/editararticulo" element={<PrivateOutlet />}>
                        <Route path="" element={<EditArticle posts={posts} userSession={userSession} />} />
                    </Route>

                    <Route path="userdashboard" element={<PrivateOutlet />}>
                        <Route path="" element={<UserDashboard userSession={userSession} />} />
                    </Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}
