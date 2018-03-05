import React from 'react';
import { StackNavigator } from 'react-navigation';

import Login from './app/screens/login';
import Main from './app/screens/main';
import About from './app/screens/about'

const loggedInApp = StackNavigator({
        main:  {screen: Main},
        about:  {screen: About}
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

const App = StackNavigator({
    login: {screen: Login},
    loggedInApp:  {screen: loggedInApp},
},
{
    headerMode: 'none',
        navigationOptions: {
        headerVisible: false,
    }
});

export default App;
