import './config/ReactToTron';
import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Routes from './routes';
import {setNavigator} from './service/navigation';

const App = () => (
  <Provider store={store}>
    <Routes ref={setNavigator} />
  </Provider>
);

export default App;
