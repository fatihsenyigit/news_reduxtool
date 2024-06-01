
import './App.css';
import { store } from './redux/store';
import AppRouter from './rooter/AppRouter';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  );
}

export default App;
