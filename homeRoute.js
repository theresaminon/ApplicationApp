import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './home';
import Appment from './booking';

const screens= {
    Home: {
        screen: Home
    },
    BookAppointment: {
        screen: Appment
    }
}

const HomeRoute = createStackNavigator(screens);

export default createAppContainer(HomeRoute);