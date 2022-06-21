import './App.css';
import Store from './pages/Store'
import { StoreProvider } from './context/StoreContext';

const App = () => {

  return (
    <div className="App">
        <StoreProvider>
          <Store />
        </StoreProvider>
    </div>
  );
}

export default App;
