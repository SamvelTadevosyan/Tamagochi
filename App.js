import React from 'react';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Login from './app/screens/login';
import Main from './app/screens/main';
import About from './app/screens/about'
import Header from './app/components/header/header'

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
    login: {
        screen: Login,
        headerMode: 'float',
        navigationOptions: {
            header: null,
        },
    },
    loggedInApp:  {screen: loggedInApp,
        headerMode: 'float',
        navigationOptions: {
            headerBackground: <Header />,
            headerRight:
                <Icon name="info-circle" color="#fff" height='40' />
        },

    },
},
);

export default App;
