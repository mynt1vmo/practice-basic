
import { Provider } from 'react-redux';
import './App.css';
import Routes from "./routes";
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes></Routes>
      </div>
    </Provider>
  );
}

export default App;
