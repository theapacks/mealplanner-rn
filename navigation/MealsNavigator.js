import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CategoryMealsScreen from '../screens/CategoryMealScreen/CategoryMealScreen';
import {CategoryscreenOptions} from '../screens/CategoriesScreen/CategoriesScreen';
import MealDetailScreen, {MealDetailScreenOptions} from '../screens/MealDetailScreen/MealDetailScreen';
import HeaderButton from '../components/HeaderButton/HeaderButton';

import Colors from '../constants/Colors';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import CategoriesScreen from '../screens/CategoriesScreen/CategoriesScreen';

const Stack = createStackNavigator();

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


const favouriteButton = <HeaderButtons HeaderButtonComponent={HeaderButton}>
  <Item title='Favourite' iconName='ios-star' onPress={() => {console.log('favouriteButton pressed')}} />
  </HeaderButtons>;

const CatscreenOptions = ({navigation}) => {
  return {
    // headerTitle: () => <Text>Meal Categories</Text>,
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            //navData.navigation.toggleDrawer();
            console.log('navigator: '+ navigation.title)
          }}
        />
      </HeaderButtons>
    )
  };
}; 


// options={CategoryscreenOptions}
const MealsNavigatorStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOpts}>
      <Stack.Screen               
        name="Categories" 
        options={CategoryscreenOptions}
        component={CategoriesScreen} 
        />
      <Stack.Screen
        options={({ route }) => ({
          title: CATEGORIES.find(category => category.id === route.params.categoryId).title
        })}
        name="CategoryMeals" 
        component={CategoryMealsScreen} />
      <Stack.Screen 
        /*options={
          ({ route }) =>({
            headerTitle: () => <Text>{MEALS.find(meal => meal.id == route.params.mealId).title}</Text>,
            headerRight: () => favouriteButton,
          })
        }*/
        options={MealDetailScreenOptions}
        name="MealDetail" 
        component={MealDetailScreen} />
    </Stack.Navigator>
  );
}

export default MealsNavigatorStack;
