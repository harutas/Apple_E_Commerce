import ProductPage from './ProductPage';
import ProductDetailPage from './ProductDetailPage';
import Header from '../components/Header';
import FavoritePage from './FavoritePage';
import CartPage from './CartPage';
import NoMatch from './NoMatch';
import { Routes, Route } from 'react-router-dom'

const Store = () => {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={
          <ProductPage />}>
        </Route>
        <Route path=":productName" element={
          <ProductDetailPage />}
        />
        <Route path="/favorite" element={
          <FavoritePage />}
        />
        <Route path="/cart" element={
          <CartPage />}
        />

        <Route path="*" element={<NoMatch/>} />
      </Routes>
    </>
    )
}

export default Store