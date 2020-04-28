import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Ionicons, AntDesign } from '@expo/vector-icons';

import MealsNavigator from './MealsNavigator';
import Favorites, {FavouritesScreenOptions}  from '../screens/FavoritesScreen/FavoritesScreen';
import MealDetailScreen from '../screens/MealDetailScreen/MealDetailScreen';
import Colors from '../constants/Colors';


const Tab = createBottomTabNavigator();
const MaterialTab = createMaterialBottomTabNavigator();
const FavouritesStack = createStackNavigator();
  
const screenOptions=({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Categories') {
        iconName = focused
          ? 'appstore1'
          : 'appstore-o';
      } else if (route.name === 'Favourites') {
        iconName = focused ? 'ios-star' : 'ios-star-outline';
      }

      const iconType = route.name === 'Categories' ? 
            <AntDesign name={iconName} size={size} color={color} /> : 
            <Ionicons name={iconName} size={size} color={color} />;
      return iconType;
    },    
});

const screenOpts = {
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
  headerTintColor: '#fff',
  headerTitleStyle :{
    fontWeight: 'bold',
  },
}

const tabBarOptions = {activeTintColor: Colors.primaryColor, inactiveTintColor: 'gray',}

const FavoritesNavigator = () => {
  return (
    <FavouritesStack.Navigator screenOptions={screenOpts}>
      <FavouritesStack.Screen options={FavouritesScreenOptions} name="Favourites" component={Favorites} />
      <FavouritesStack.Screen name="MealDetail" component={MealDetailScreen} />
    </FavouritesStack.Navigator>
  );
}

const MealsTabNavigator = () => {
  return (
      <Tab.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions} >
        <Tab.Screen name="Categories" component={MealsNavigator} />
        <Tab.Screen name="Favourites" component={FavoritesNavigator}  />
      </Tab.Navigator>
  );
}

const MealsMaterialTabNavigator = () => {
    return (
        <MaterialTab.Navigator 
          barStyle={{ backgroundColor: Colors.primaryColor }} 
          screenOptions={screenOptions} 
          tabBarOptions={tabBarOptions} >
          <MaterialTab.Screen name="Categories" component={MealsNavigator} />
          <MaterialTab.Screen name="Favourites" component={FavoritesNavigator} />
        </MaterialTab.Navigator>
    );    
}

const MealsBottomTabNavigator = Platform.OS === 'android' ? MealsMaterialTabNavigator : MealsTabNavigator;

export default MealsBottomTabNavigator;
