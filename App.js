import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { createStackNavigator, createAppContainer } from "react-navigation-stack";
// import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from 'react-navigation-drawer';
// import { createAppContainer } from "react-navigation";
import { createAppContainer } from "react-navigation";

import HomeScreen from './components/Home';
import AboutScreen from './components/About';
import ContactScreen from './components/ContactScreen';
import LoginScreen from './components/Login'
import TasksScreen from './components/Tasks'
import NotificationsScreen from './components/Notifications'
/////////////////////////
///////////////////////
///////////////////////
export default class App extends React.Component {

  state = {
    loginPage: true
  }

  navToHome = () => {
    this.setState({
      loginPage:false
    })
  }


  render() {
    return (
      <View style={styles.loginPageContainer}>
        {this.state.loginPage ?
          <LoginScreen navigateToHome={this.navToHome} />
          :
          <AppContainer />
        }
      </View>
    )
  }
}

const AppNavigator = createDrawerNavigator({
  'الرئيسية': {
    screen: HomeScreen
  },
  'المهام': {
    screen: TasksScreen
  },
  'التنبيهات': {
    screen: NotificationsScreen
  }
}, {
  drawerPosition: 'right',
  initialRouteName: 'الرئيسية',
  contentOptions: {
    activeTintColor: "#f3983d"
  }
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginPageContainer: {
    flex: 1,
    flexDirection: "column"
  }
});

//////////////////////////////////////////////////////////////////////////////
// import { StatusBar } from 'expo-status-bar';
// import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { Provider as PaperProvider } from 'react-native-paper';
// import { Button } from 'react-native-paper';
// import Home from './components/Home'
// class App extends Component {

//   render() {
//     return (
//       <PaperProvider>
//         <Home />
//       </PaperProvider>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// export default App

