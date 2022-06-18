import './App.css';
import products from './model/products';
import ProductPage from './components/ProductPage';
import Header from './components/Header';

function App() {
  return (
    <div className="App bg-light">
      <Header/>
      <ProductPage products={products} />
    </div>
  );
}

export default App;
