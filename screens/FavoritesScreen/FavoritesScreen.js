import React from 'react';
import { useSelector } from 'react-redux';

import MealList from '../../components/MealList/MealList';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/HeaderButton/HeaderButton';

let favouritesProps = null;

const FavoritesScreen = props => {
    favouritesProps = props;
    const favouriteMeals = useSelector(state => state.meals.favouriteMeals);
    return <MealList mealsList={favouriteMeals} navigation={props.navigation} />;
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
