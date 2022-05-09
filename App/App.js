// redux
import store from './store'
import { Provider } from 'react-redux';

import AppRouter from './source';





export default function App() {

  return (
    <Provider  store={store}>

      <AppRouter />
    </Provider>
  );
}


