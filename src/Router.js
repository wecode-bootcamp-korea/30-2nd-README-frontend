import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';
import Library from './pages/Library/Library';

import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/books/:id" element={<Product />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default Router;
