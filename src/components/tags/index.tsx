/* eslint-disable */ 
import React, {useCallback} from 'react';
import {Text, TouchableOpacity, useColorScheme} from 'react-native';
import styles from './styles';

import { TagProps } from '../../utils/types';

export const Tag: React.FC<TagProps> = ({category, selectedCategory, setSelectedCategory}) => {
  
  const handlePress = useCallback(() => {
    setSelectedCategory(category);
  }, [category, setSelectedCategory]);

  return (
    <TouchableOpacity
      style={[
        styles.container,
        selectedCategory === category && styles.selected,
      ]}
      onPress={handlePress}>
      <Text>{`${
        category.charAt(0).toUpperCase() + category.slice(1)
      }`}</Text>
    </TouchableOpacity>
  );
};