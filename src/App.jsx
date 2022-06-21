import './App.css';
import React, { useState } from 'react'
import Store from './pages/Store'
import productList from './model/products';

const App = () => {
  const [products, setProducts] = useState(productList);
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Store
        products={products}
        setProducts={setProducts}
        cart={cart}
        setCart={setCart}
      />
    </div>
  );
}

export default App;
