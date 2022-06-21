import ProductPage from './ProductPage';
import ProductDetailPage from './ProductDetailPage';
import Header from '../components/Header';
import FavoritePage from './FavoritePage';
import CartPage from './CartPage';
import NoMatch from './NoMatch';
import { Routes, Route } from 'react-router-dom'

const Store = ({products, setProducts, cart, setCart}) => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={
          <ProductPage
            products={products}
            setProducts={setProducts}
            cart={cart}
            setCart={setCart}
          />}
        >
        </Route>
        <Route path=":productName" element={
          <ProductDetailPage
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
    </>
    )
}

export default Store