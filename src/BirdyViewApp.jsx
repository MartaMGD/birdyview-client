import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Search from './views/Search';
import Articles from './views/Articles';
import Birdwatching from './views/Birdwatching';
import LoginScreen from './views/LoginScreen';
import Navbar from './components/ui/Navbar/Navbar';
import Footer from './components/ui/Footer/Footer';
import Home from './views/Home';
import RetrievePassword from './views/RetrievePassword';
import RegisterScreen from './views/RegisterScreen';
import Birdpage from './views/Birdpage';
import BlogEntryPage from './views/BlogEntryPage';

export default function BirdyViewApp() {
  return (
    <>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="search" element={<Search/>}/>
            <Route path="articulos" element={<Articles/>}/>
            <Route path="avistamientos" element={<Birdwatching/>}/>
            <Route path="login" element={<LoginScreen/>}/>
            {/* Rutas internas? */}
            <Route path="recuperarpassword" element={<RetrievePassword/>}/>
            <Route path="registernewuser" element={<RegisterScreen/>}/>
            <Route path="birdpage/:birdId" element={<Birdpage/>}/>
            <Route path="articulos/:postId" element={<BlogEntryPage/>}/>

        </Routes>
        <Footer/>
        </BrowserRouter>
    </>
  )
}

