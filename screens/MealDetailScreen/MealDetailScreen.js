import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

import { MEALS } from '../../data/dummy-data';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/HeaderButton/HeaderButton';


import styles from './MealDetailScreen.styles';

let mealDetailProps, mealId, selectedMeal  = null;

const ListItem = props => {
    return (
      <View style={styles.listItem}>
        <Text>{props.children}</Text>
      </View>
    );
  };

const MealDetailScreen = (props) => {
    mealDetailProps = props;
    mealId = props.route.params.mealId;
    selectedMeal = MEALS.find(meal => meal.id === mealId);
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
    return {
        headerTitle: () => <Text>{selectedMeal.title}</Text>,
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title="Menu"
                iconName="ios-star"
                onPress={() => {
                    //mealDetailProps.navigation.toggleDrawer();
                    console.log('Mark as favorite!');
                }}
            />
            </HeaderButtons>
      )
    };
};

export default MealDetailScreen;
