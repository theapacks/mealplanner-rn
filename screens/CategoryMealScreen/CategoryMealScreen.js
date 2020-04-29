import React from 'react';
import { useSelector } from 'react-redux';
import MealList from '../../components/MealList/MealList';

const CategoryMealScreen = props => {
    const loadedMeals = useSelector(state => state.meals.filteredMeals);
    const catId = props.route.params.categoryId;
    const displayedMeals = loadedMeals.filter(meal => meal.categoryIds.indexOf(catId));

    return <MealList mealsList={displayedMeals} navigation={props.navigation} />;
};

export default CategoryMealScreen;
