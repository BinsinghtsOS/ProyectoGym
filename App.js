import React from "react";
import Loader from './src/screens/loader';
import Loggin from './src/screens/login';
import Home from './src/screens/home';
import Routines from './src/screens/routines';
import newRoutines from './src/screens/newroutines';
import newSet from './src/screens/newset';
import newSeries from './src/screens/newseries';

import { createStackNavigator, createAppContainer ,createSwitchNavigator} from "react-navigation";


const AppNavigator = createSwitchNavigator({
  LogginScreen: {
    screen:Loggin,
    navigationOptions: {
      headerVisible: false,
      headerVisible: null,
  }
  },
  Home:{
    screen:Home,
    navigationOptions: {
      headerVisible: false,
      headerVisible: null,
  }
  },
  Routines:Routines,
  },{
    headerMode: 'none',
    headerVisible: null,
  }
);
const InitialNavigator = createSwitchNavigator({
  Loader: Loader,
  App: AppNavigator
},{
  headerMode: 'none',
  headerVisible: null,
}
);

const newRutinesScreen = createStackNavigator({
  home:{
    screen:InitialNavigator,
    navigationOptions: {
      headerVisible: false,
      headerVisible: null,
  }
  },
  newRoutines:newRoutines,
  newSet:newSet,
  newSeries:newSeries
},

);


export default createAppContainer(newRutinesScreen);


