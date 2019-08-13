import React from "react";
import Loader from './src/screens/loader';
import Loggin from './src/screens/login';
import Home from './src/screens/home';
import Routines from './src/screens/routines';
import newRoutines from './src/screens/newroutines';
import newSet from './src/screens/newset';
import newSeries from './src/screens/newseries';

import { createStackNavigator, createAppContainer ,createSwitchNavigator} from "react-navigation";
import { Header } from "react-native/Libraries/NewAppScreen";


const App = createSwitchNavigator({
  Splash:newSeries,
  }
);


export default createAppContainer(App);


