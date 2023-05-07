/* eslint-disable */ 
import React from 'react';
import {FlatList} from 'react-native';

import styles from './styles';
import { NewsCategory } from '../../utils/constants';
import { Tag } from '../tags';
import { NewsTagsProps } from '../../utils/types';

export const NewsTags: React.FC<NewsTagsProps> = ({selectedCategory, setSelectedCategory}) => {



  
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={Object.keys(NewsCategory)}
      keyExtractor={(item: string) => item}
      renderItem={({item}: any) => (
        <Tag
          category={item}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      )}
      style={styles.list}
      contentContainerStyle={styles.contentContainer}
    />
  );
};