import React from 'react';
import { View, FlatList } from 'react-native';

import MealItem from '../MealItem/MealItem';

import styles from './MealList.styles';

const MealList = props => {

    const renderMealItem = itemData => {
        return (
            <MealItem
                title={itemData.item.title}
                image={itemData.item.imageUrl}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                onSelectMeal={() => {props.navigation.navigate('MealDetail', { mealId: itemData.item.id })}}
          />            
        );
    };
        
    return (
        <View style={styles.list}>
            <FlatList 
                data={props.mealsList} 
                keyExtractor={(item, index) => item.id}  
                renderItem={renderMealItem} />
        </View>
    );
};

export default MealList;
