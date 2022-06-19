import './App.css';
import React, { useState } from 'react'
import productList from './model/products';
import ProductPage from './pages/ProductPage';
import Header from './components/Header';
import FavoritePage from './pages/FavoritePage';
import ProductDetailPage from './pages/ProductDetailPage'
import NoMatch from './pages/NoMatch';

import { Routes, Route } from 'react-router-dom'

const App = () => {
  const [products, setProducts] = useState(productList);

  return (
    <div className="App bg-light">
      <Header/>
      <Routes>
        <Route path="/" element={
          <ProductPage
            products={products}
            setProducts={setProducts}
          />}
        />
        <Route path="/favorite" element={
          <FavoritePage
          products={products}
          setProducts={setProducts}
          />}
        />
        <Route path="*" element={<NoMatch/>} />
      </Routes>
      <ProductDetailPage/>
    </div>
  );
}

export default App;
