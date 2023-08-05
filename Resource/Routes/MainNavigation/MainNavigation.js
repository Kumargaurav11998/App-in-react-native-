import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../../page/Splash/SplashScreen';
import TabNavigation from '../TabNavigation/TabNavigation';
import AboutUsScreen from '../../page/AboutUs/AboutusScreen';
import {colors} from '../../utils/colors';
import ContactusSreen from '../../page/ContactUs/ContactUsScreen';
function MainNAvigation() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AboutUsScreen"
          component={AboutUsScreen}
          options={{
            headerTitleAlign: 'center',
            title: 'About Us',
            headerTitleStyle: {color: colors.black},
            headerStyle: {backgroundColor: colors.appdefultColor},
            headerBackground: () => {},
          }}
        />
        <Stack.Screen
          name="ContactusSreen"
          component={ContactusSreen}
          options={{
            headerTitleAlign: 'center',
            title: 'Contact Us',
            headerTitleStyle: {color: colors.black},
            headerStyle: {backgroundColor: colors.appdefultColor},
            headerBackground: () => {},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNAvigation;
