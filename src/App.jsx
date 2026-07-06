import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import { FavoritesProvider } from './hooks/useFavorites';
import Navbar from './components/Navbar/Navbar'; import Footer from './components/Footer/Footer'; import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home/Home'; import Hotels from './pages/Hotels/Hotels'; import HotelDetails from './pages/HotelDetails/HotelDetails'; import NotFound from './pages/NotFound/NotFound';
export default function App(){return <ThemeProvider><FavoritesProvider><div className="app"><Navbar/><main><Routes><Route path="/" element={<Home/>}/><Route path="/hotels" element={<Hotels/>}/><Route path="/hotels/:id" element={<HotelDetails/>}/><Route path="*" element={<NotFound/>}/></Routes></main><Footer/><ScrollToTop/></div></FavoritesProvider></ThemeProvider>}
