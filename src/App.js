import './App.css';
import products from './model/products';
import ProductPage from './components/ProductPage';
import Header from './components/Header';
import FavoritePage from './components/FavoritePage';
import ProductDetailPage from './pages/ProductDetailPage'
import NoMatch from './pages/NoMatch';

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App bg-light">
      <Header/>
      <Routes>
        <Route path="/" element={<ProductPage products={products} />} />
        <Route path="/favorite" element={<FavoritePage/>} />
        <Route path="*" element={<NoMatch/>} />
      </Routes>
      <ProductDetailPage/>
    </div>
  );
}

export default App;
