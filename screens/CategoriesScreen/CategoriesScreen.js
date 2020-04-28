import React from 'react';
import { FlatList, Text } from 'react-native';

import CategoryGridTile from '../../components/CategoryGridTile/CategoryGridTile';
import { CATEGORIES } from '../../data/dummy-data';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../../components/HeaderButton/HeaderButton';

import styles from './CategoriesScreen.styles';

let categoriesProps = null;

const CategoriesScreen = (props) => {
  categoriesProps = props;
    const renderGridItem = itemData => {
        return (
            <CategoryGridTile 
                color={itemData.item.color}
                title={itemData.item.title} 
                onSelect={() => {props.navigation.navigate('CategoryMeals', { categoryId: itemData.item.id })}} />
        );
    };    
    return (
        <FlatList 
            data={CATEGORIES} 
            renderItem={renderGridItem} 
            numColumns={2} />
    );
};

export const CategoryscreenOptions = () => {
    return {
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
              categoriesProps.navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      )
    };
};


export default CategoriesScreen;
