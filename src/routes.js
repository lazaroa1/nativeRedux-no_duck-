import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './pages/Login';
import Repositories from './pages/Reporsitories/index';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Repositories,
  }),
);

export default Routes;
