import Loader from './src/screens/loader';
import Loggin from './src/screens/login';
import Home from './src/screens/home';
import Routines from './src/screens/routines';
import newRoutines from './src/screens/newroutines';
import newSet from './src/screens/newset';
import newSeries from './src/screens/newseries';
import { createStackNavigator, createAppContainer ,createSwitchNavigator} from "react-navigation";
const AuthStack = createStackNavigator({
  Routines:{
    screen:Routines,
    navigationOptions: {
   header: null //this will hide the header
    },
  },
  newRoutines:newRoutines,
  newSet:newSet,
  newSeries:newSeries
  },
 );
const App = createSwitchNavigator({
  Splash:Loader,
  Loggin:Loggin,
  Home:Home,
  newrt:{
    screen: AuthStack,
  },

  },{
    initialRouteName: 'Splash',
    Header:null
  }
);
export default createAppContainer(App);