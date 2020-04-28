import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './CategoryGridTile.styles';

const CategoryGridTile = props => {
    return (
        <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
            <View style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
                <Text style={styles.title} >{props.title}</Text>
            </View>            
        </TouchableOpacity>
    );
};

export default CategoryGridTile;
