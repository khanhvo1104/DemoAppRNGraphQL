import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home/HomeScreen';
import SettingSreen from '../screens/Setting/SettingSreen';

const Tab = createBottomTabNavigator();

const LoggedInNavigator = () => {
  return (
      <Tab.Navigator screenOptions={{
        headerShown: false
      }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Setting" component={SettingSreen} />
      </Tab.Navigator>
    );
};

export default LoggedInNavigator;
