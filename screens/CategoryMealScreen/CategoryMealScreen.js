import React from 'react';
import { View, Button, FlatList } from 'react-native';

import MealList from '../../components/MealList/MealList';
import { MEALS } from '../../data/dummy-data';

const CategoryMealScreen = props => {
    const catId = props.route.params.categoryId;
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId));

    return <MealList mealsList={displayedMeals} navigation={props.navigation} />;
};

export default CategoryMealScreen;
