import {Routes, Route, BrowserRouter} from 'react-router-dom';
import HomeSearch from './views/HomeSearch';
import Articles from './views/Articles';
import Birdwatching from './views/Birdwatching';
import About from './views/About';
import LoginScreen from './views/LoginScreen';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';

export default function BirdyViewApp() {
  return (
    <>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<HomeSearch/>}/>
            <Route path="articulos" element={<Articles/>}/>
            <Route path="avistamientos" element={<Birdwatching/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="login" element={<LoginScreen/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    </>
  )
}

