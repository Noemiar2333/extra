import * as React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import MyRewardsStackNavigator from './stack-navigators/Segundo';
import Tercero from './stack-navigators/Tercero';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import BottomTabNavigator from './BottomTabNavigator';
import Segundo from './stack-navigators/Segundo';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const DrawerHeaderContent = props => {
    return (
      <DrawerContentScrollView contentContainerStyle={{flex: 1}}>
        <View
          style={{
            backgroundColor: 'darkturquoise',
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
            top: -5,
          }}>
          <Text style={{color: 'black'}}>Drawer</Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  };

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#fff',
        },
      }}
      drawerContent={DrawerHeaderContent}>
      <Drawer.Screen
        name={'Tab button'}
        component={BottomTabNavigator}
        options={{
          drawerLabel: 'Home',
          drawerIcon: ({focused, size, color}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name={'Segundo'}
        component={Segundo}
        options={{
          drawerLabel: 'Segundo',
          drawerIcon: ({focused, size, color}) => (
            <MaterialCommunityIcons name="firewire" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name={'Tercero'}
        component={Tercero}
        options={{
          drawerLabel: 'Tercero',
          drawerIcon: ({focused, size, color}) => (
            <MaterialCommunityIcons
              name="location-enter"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  headerRight: {
    marginRight: 15,
  },
  // drawer content
  drawerLabel: {
    fontSize: 14,
  },
  drawerLabelFocused: {
    fontSize: 14,
    color: '#551E18',
    fontWeight: '500',
  },
  drawerItem: {
    height: 50,
    justifyContent: 'center',
  },
  drawerItemFocused: {
    backgroundColor: '#ba9490',
  },
});

export default DrawerNavigator;