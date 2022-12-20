import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, StyleSheet, View} from 'react-native';

import HomeStackNavigator from './Home';
import BookStackNavigator from './stack-navigators/Boton2';
import ContactStackNavigator from './stack-navigators/Boton3';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './Home';
import Boton2 from './stack-navigators/Boton2';
import Boton3 from './stack-navigators/Boton3';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="HomeScreen" screenOptions={{}}>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarLabel: 'Home ',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={'Boton2'}
        component={Boton2}
        options={{
          tabBarLabel: 'Boton 2',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="book-open-blank-variant"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Boton3'}
        component={Boton3}
        options={{
          tabBarLabel: 'Boton 3',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="contacts" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarLabel: {
    color: '#292929',
    fontSize: 12,
  },
  tabContainer: {
    height: 60,
  },
});

export default BottomTabNavigator;