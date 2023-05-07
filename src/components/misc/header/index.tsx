/* eslint-disable prettier/prettier */
import React from 'react';
import {Heading, HStack, Switch, useColorMode} from 'native-base';
import {styles} from './styles';
import { NEWS_FEED } from '../../../utils/constants';

export const Header = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  const isDarkMode = colorMode === 'dark';
  const toggleSwitch = () => {
    toggleColorMode();
  };
  return (
    <HStack style={styles.headerContainer}>
      <Heading>{NEWS_FEED}</Heading>
      <Switch
        defaultIsChecked={isDarkMode}
        
        value={isDarkMode}
        onValueChange={toggleSwitch}
      />
    </HStack>
  );
};