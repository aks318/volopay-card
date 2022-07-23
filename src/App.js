import './App.css';
import { Provider } from 'react-redux'
import store from './redux-store/store';
import VolopayCard from './components/VolopayCard';
import Routers from './Routers';
import Index from './components/StyledComponents/Index';

function App() {
  return (
    <Provider store={store}>
      {/* <Routers /> */}
      <Index />
    </Provider>
  );
}

export default App;
