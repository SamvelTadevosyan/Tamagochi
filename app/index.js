import { StackNavigator } from 'react-navigation';

import Login from 'screens/login.js'
import Main from 'screens/main.js'

const Navi = StackNavigator({
    login: {screen: Login},
    main: {screen: Main}
});

export default Navi;
