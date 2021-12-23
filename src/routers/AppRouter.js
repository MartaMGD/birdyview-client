import {Routes, Route, BrowserRouter} from 'react-router-dom';
import HomeSearch from '../views/HomeSearch/HomeSearch';
import Articles from '../views/Articles/Articles';
import Birdwatching from '../views/Birdwatching/Birdwatching';
import About from '../views/About/About';
import LoginScreen from '../views/LoginScreen/LoginScreen';

export default function AppRouter() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeSearch/>}/>
            <Route path="articulos" element={<Articles/>}/>
            <Route path="avistamientos" element={<Birdwatching/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="login" element={<LoginScreen/>}/>
        </Routes>
        </BrowserRouter>
    )
}
