import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Colors from '../constants/Colors';
import FiltersScreen, {FiltersScreenOptions} from '../screens/FiltersScreen/FiltersScreen';
import FavoritesScreen from '../screens/FavoritesScreen/FavoritesScreen';

import MealsBottomTabNavigator from './MealsBottomTabNavigator';

const FilterStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const FavouriteStack = createStackNavigator();

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
/*
const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}
*/

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close"
        onPress={() => props.navigation.closeDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const FavouriteMealsStack = () => {
    return (
      <FavouriteStack.Navigator>
        <FavouriteStack.Screen name="Favourites" component={FavoritesScreen} />
      </FavouriteStack.Navigator>
    );
};

const FiltersNavigation = () => {
    return (
      <FilterStack.Navigator screenOptions={screenOpts}>
        <FilterStack.Screen name="Filters" component={FiltersScreen} options={FiltersScreenOptions} />
      </FilterStack.Navigator>    
    );
};
const drawerOptions = {
  activeTintColor: Colors.secondaryColor,
}
const MainNavigatorDrawer = () => {
    return (
      <Drawer.Navigator drawerContentOptions={drawerOptions} drawerContent={(props) => <CustomDrawerContent {...props} />}>        
        <Drawer.Screen 
          options={({ route }) => ({
            title: "Meals",
          })}      
          name="MealsAndFavourites" 
          component={MealsBottomTabNavigator} />
        <Drawer.Screen name="Filter" component={FiltersNavigation} />
      </Drawer.Navigator>
    );
};

export default MainNavigatorDrawer;
