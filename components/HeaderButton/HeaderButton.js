import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HeaderButton } from 'react-navigation-header-buttons';

import Colors from '../../constants/Colors';
import styles from './HeaderButton.styles';

const CustomHeaderButton = props => {
    return <HeaderButton 
        {...props} 
        IconComponent={Ionicons} 
        IconSize={25} 
        color={Colors.gold} />;
};

export default CustomHeaderButton;
