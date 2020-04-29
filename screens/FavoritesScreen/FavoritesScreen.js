import React from 'react';
import {Text, View} from 'react-native';
import { useSelector } from 'react-redux';

import MealList from '../../components/MealList/MealList';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/HeaderButton/HeaderButton';

import styles from './FavoritesScreen.styles';

let favouritesProps = null;

const FavoritesScreen = props => {
    favouritesProps = props;
    const favMeals = useSelector(state => state.meals.favouriteMeals);

    if(!favMeals || favMeals.length === 0) {
      return (
        <View style={styles.content}>
          <Text>You currently have no favourites. Click on the star to start adding</Text>
        </View>
      );
    }
    
    return <MealList mealsList={favMeals} navigation={props.navigation} />;
};

export const FavouritesScreenOptions = () => {
    return {
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
                favouritesProps.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      )
    };
};
export default FavoritesScreen;
