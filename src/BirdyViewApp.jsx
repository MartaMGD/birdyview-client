import { Routes, Route, BrowserRouter, Outlet, Navigate } from 'react-router-dom';
import { useContext } from 'react';
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
import { Context } from './context/Context';

export default function BirdyViewApp() {
    // FOR THE USER SESSION
    const { user } = useContext(Context);

    // GLOBAL STATE TO SET AND EDIT ARTICLES GLOBALLY
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("http://localhost:5000/api/posts/")
            setPosts(res.data);
        }
        fetchPosts();
    }, []);

    return (
        <>
            <BrowserRouter>
                {/*aquí pasamos la sesión a la navbar*/}
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="search" element={<Search />} />
                    <Route path="birdpage/:birdId" element={<Birdpage />} />
                    <Route path="articulos" element={<Articles posts={posts} />} />
                    <Route path="articulos/:PostId" element={<BlogEntryPage posts={posts} />} />
                    <Route path="login" element={<LoginScreen />} />
                    <Route path="recuperarpassword" element={<RetrievePassword />} />
                    <Route path="registernewuser" element={<RegisterScreen />} />
                    <Route path="avistamientos" element={<Birdwatching />} />
                    <Route path="articulos/nuevoarticulo" element={<NewArticle />} />
                    <Route path="articulos/editararticulo" element={<EditArticle posts={posts} />} />
                    <Route path="userdashboard" element={<UserDashboard />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}
