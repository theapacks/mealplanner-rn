import React from 'react';
import { MEALS } from '../../data/dummy-data';
import MealList from '../../components/MealList/MealList';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/HeaderButton/HeaderButton';

let favouritesProps = null;

const FavoritesScreen = props => {
    favouritesProps = props;
    const favouriteMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
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
