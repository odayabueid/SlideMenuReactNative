import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import Home from '../components/Home'

const MainNavigation = createStackNavigator({
    LandingPage: Home
})
export default createAppContainer(MainNavigation)
