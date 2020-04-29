import React from 'react';
import { useSelector } from 'react-redux';
import MealList from '../../components/MealList/MealList';
import { View, Text } from 'react-native';

import styles from './CategoryMealScreen.styles';

const CategoryMealScreen = props => {
    const loadedMeals = useSelector(state => state.meals.filteredMeals);
    const catId = props.route.params.categoryId;
    const displayedMeals = loadedMeals.filter(meal => meal.categoryIds.indexOf(catId));

    if(displayedMeals.length <= 0) {
        return (
            <View style={styles.screen}>
                <Text>No meals to display. Please check your filters</Text>
            </View>
        );
    }
    return <MealList mealsList={displayedMeals} navigation={props.navigation} />;
};

export default CategoryMealScreen;
