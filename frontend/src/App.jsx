import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { PlaceOrder } from './pages/PlaceOrder/PlaceOrder';
import { Cart } from './pages/Cart/Cart';
import { Footer } from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;