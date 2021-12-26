import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Search from './views/Search';
import Articles from './views/Articles';
import Birdwatching from './views/Birdwatching';
import LoginScreen from './views/LoginScreen';
import Navbar from './components/ui/Navbar/Navbar';
import Footer from './components/ui/Footer/Footer';
import Home from './views/Home';

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
        </Routes>
        <Footer/>
        </BrowserRouter>
    </>
  )
}

