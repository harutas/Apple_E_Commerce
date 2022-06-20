import './App.css';
import React, { useState } from 'react'
import productList from './model/products';
import ProductPage from './pages/ProductPage';
import Header from './components/Header';
import FavoritePage from './pages/FavoritePage';
// import ProductDetailPage from './pages/ProductDetailPage'
import CartPage from './pages/CartPage';
import NoMatch from './pages/NoMatch';

import { Routes, Route } from 'react-router-dom'

const App = () => {
  const [products, setProducts] = useState(productList);
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={
          <ProductPage
            products={products}
            setProducts={setProducts}
            cart={cart}
            setCart={setCart}
          />}
        />
        <Route path="/favorite" element={
          <FavoritePage
            products={products}
            setProducts={setProducts}
            cart={cart}
            setCart={setCart}
          />}
        />
        <Route path="/cart" element={
          <CartPage
          products={products}
          setProducts={setProducts}
          cart={cart}
          setCart={setCart}
          />}
        />
        <Route path="*" element={<NoMatch/>} />
      </Routes>
      {/* <ProductDetailPage/> */}
    </div>
  );
}

export default App;
