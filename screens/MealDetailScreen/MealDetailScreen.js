import React, { useEffect, useCallback } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/HeaderButton/HeaderButton';
import { toogleFavourite } from '../../store/actions/meals';

import styles from './MealDetailScreen.styles';

let mealDetailProps, selectedMeal  = null;

const ListItem = props => {
    return (
      <View style={styles.listItem}>
        <Text>{props.children}</Text>
      </View>
    );
  };

const MealDetailScreen = (props) => {
    mealDetailProps = props;
    const mealId = props.route.params.mealId;
    const loadedMeals = useSelector(state => state.meals.meals);
    selectedMeal = loadedMeals.find(meal => meal.id === mealId);

    const dispatch = useDispatch();
    const toggleFavouriteHandler = useCallback(() => {
      dispatch(toogleFavourite(mealId));
    }, [dispatch, mealId]);

    useEffect(() => {
      //props.navigation.setParams({ mealTitle: selectedMeal.title })
      props.navigation.setParams({toggleFav: toggleFavouriteHandler})
    }, [toggleFavouriteHandler]);

    return (
        <ScrollView>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <View style={styles.details}>
                <Text>{selectedMeal.duration}m</Text>
                <Text>{selectedMeal.complexity.toUpperCase()}</Text>
                <Text>{selectedMeal.affordability.toUpperCase()}</Text>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient => (
            <ListItem key={ingredient}>{ingredient}</ListItem>
            ))}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step => (
            <ListItem key={step}>{step}</ListItem>
            ))}
      </ScrollView>
    );
};
// <Button title="Go Home" onPress={() => {props.navigation.popToTop()}} />
export const MealDetailScreenOptions = () => {   
    // const toggleFavourite = mealDetailProps.route.params.toggleFav;
    return {
        headerTitle: () => <Text>{selectedMeal.title}</Text>,
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title="Menu"
                iconName="ios-star"
                onPress={mealDetailProps.route.params.toggleFav}
            />
            </HeaderButtons>
      )
    };
};

export default MealDetailScreen;
