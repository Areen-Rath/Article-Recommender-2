import * as React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './screens/Home';
import Popular from './screens/Popular';
import Recommended from './screens/Recommended';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const StackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false
    }
  },
  TabNavigator: {
    screen: TabNavigator,
    navigationOptions: {
      headerBackTitle: null,
      headerTintColor: "#fff",
      headerTitle: "Recommended Movies",
      headerStyle: {
        backgroundColor: "#d500f9"
      },
      headerTitleStyle: {
        color: "#fff",
        fontSize: RFValue(18),
        fontWeight: "bold"
      }
    }
  }
}, {
  initialRouteName: "Home"
});

const TabNavigator = createMaterialTopTabNavigator({
  Recommended: {
    screen: Recommended,
    navigationOptions: {
      tabBarLabel: "Recommended",
      tabBarOptions: {
        tabStyle: {
          backgroundColor: "#fff"
        },
        labelStyle: {
          color: "#000"
        },
        indicatorStyle: {
          backgroundColor: "#000"
        }
      }
    }
  },
  Popular: {
    screen: Popular,
    navigationOptions: {
      tabBarLabel: "Popular",
      tabBarOptions: {
        tabStyle: {
          backgroundColor: "#fff"
        },
        labelStyle: {
          color: "#000"
        },
        indicatorStyle: {
          backgroundColor: "#000"
        }
      }
    }
  }
});

const AppContainer = createAppContainer(StackNavigator);