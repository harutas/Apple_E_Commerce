// components
import Store from './pages/Store';
// hooks
import { StoreProvider } from './context/StoreContext';
// css
import './App.css';

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
