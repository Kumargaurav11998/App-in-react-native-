import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../../page/Home/HomeScreen';
import UserScreen from '../../page/User/UserScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from '../../utils/colors';
import {Avatar} from '@rneui/base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
function TabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.appdefultColor,
        },
        tabBarInactiveTintColor: colors.black,
        tabBarActiveTintColor: colors.red,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="UserScreen"
        component={UserScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigation;
