import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Routes, Route, useLocation } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import woman_banner from './Components/Assets/banner_woman.png';
import kids_banner from './Components/Assets/banner_kids.png';

function App() {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route
          path="/mens"
          element={<ShopCategory banner={men_banner} category="mens" />}
        />
        <Route
          path="/women"
          element={<ShopCategory banner={woman_banner} category="women" />}
        />
        <Route
          path="/kids"
          element={<ShopCategory banner={kids_banner} category="kids" />}
        />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      {location.pathname !== '/login' && <Footer />}
    </div>
  );
}

export default App;
