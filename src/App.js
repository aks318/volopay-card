import './App.css';
import { Provider } from 'react-redux'
import store from './redux-store/store';
import VolopayCard from './components/VolopayCard';

function App() {
  return (
    <Provider store={store}>
      <VolopayCard />
    </Provider>
  );
}

export default App;
