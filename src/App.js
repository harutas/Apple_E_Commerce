import './App.css';
import products from './model/products';
import ProductPage from './components/ProductPage';

function App() {
  return (
    <div className="App bg-light">
      <ProductPage products={products} />
    </div>
  );
}

export default App;
