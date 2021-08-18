/* eslint-disable prettier/prettier */
import React from 'react';

import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Films from './src/pages/Films';
import PageFake from './src/pages/PageFake';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={'#FFF'}
      barStyle={{backgroundColor: '#141414'}}
      shifting={false}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({color}) => (
            <Icon
              name="home"
              color={color}
              size={26}
            />
          ),
        }}
      />

      <Tab.Screen
        name="buscar"
        component={PageFake}
        options={{
          tabBarLabel: 'Buscar',
          tabBarIcon: ({color}) => (
            <Icon
              name="magnify"
              color={color}
              size={26}
            />
          ),
        }}
      />

    <Tab.Screen
        name="embreve"
        component={PageFake}
        options={{
          tabBarLabel: 'Em Breve',
          tabBarIcon: ({color}) => (
            <Icon
              name="play-speed"
              color={color}
              size={26}
            />
          ),
        }}
      />

    <Tab.Screen
        name="download"
        component={PageFake}
        options={{
          tabBarLabel: 'Download',
          tabBarIcon: ({color}) => (
            <Icon
              name="download"
              color={color}
              size={26}
            />
          ),
        }}
      />

    <Tab.Screen
        name="mais"
        component={PageFake}
        options={{
          tabBarLabel: 'Mais',
          tabBarIcon: ({color}) => (
            <Icon
              name="menu"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          options={{headerShown:false}}
          name="Login"
          component={Login}
        />

        <Stack.Screen
          options={{headerShown:false}}
          name="Home"
          component={HomeTabs}
        />

        <Stack.Screen
          options={{headerShown:false}}
          name="Films"
          component={Films}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
