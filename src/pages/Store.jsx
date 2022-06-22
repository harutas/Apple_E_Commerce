// router
import { Routes, Route } from 'react-router-dom';
// hooks
import React, { useState } from "react";
// components
import Header from '../components/Header';
import ProductPage from './ProductPage';
import ProductDetailPage from './ProductDetailPage';
import FavoritePage from './FavoritePage';
import CartPage from './CartPage';
import NoMatch from './NoMatch';

const Store = () => {
    // ソートとフィルタリングの状態管理
    const [sort, setSort] = useState('');
    const [filter, setFilter] = useState('');

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={
          <ProductPage sort={sort} setSort={setSort} filter={filter} setFilter={setFilter} />}>
        </Route>
        <Route path=":productName" element={<ProductDetailPage />}/>
        <Route path="/favorite" element={<FavoritePage />}/>
        <Route path="/cart" element={<CartPage />}/>
        <Route path="*" element={<NoMatch/>} />
      </Routes>
    </>
    );
}

export default Store;