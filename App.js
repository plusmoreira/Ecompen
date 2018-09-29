import React from 'react';
import { createStackNavigator } from 'react-navigation';
// import { StatusScreen } from './pages/Status';
import { WelcomeScreen } from './pages/Welcome';
import { LoginScreen } from './pages/Login';
import { RegisterScreen } from './pages/Register';


const RootStack = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
    // Status: StatusScreen,
  },
  {
    initialRouteName: 'Welcome',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}


