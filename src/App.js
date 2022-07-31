import './App.css';
import { Provider } from 'react-redux'
import store from './redux-store/store';
import VolopayCard from './components/VolopayCard';
import Routers from './Routers';
import Index from './components/StyledComponents/Index';
import DynamicTable from './components/MuiTable/DynamicTable';

function App() {
  return (
    <Provider store={store}>
      {/* <Routers /> */}
      {/* <Index /> */}
      <DynamicTable />
    </Provider>
  );
}

export default App;
