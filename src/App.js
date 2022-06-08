import './App.css';
import { Provider } from 'react-redux'
import store from './redux-store/store';
import VolopayCard from './components/VolopayCard';
import Routers from './Routers';

function App() {
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  );
}

export default App;
