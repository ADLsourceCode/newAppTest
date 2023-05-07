/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
/* eslint-disable */ 

import React from 'react';
import { NativeBaseProvider, Box, useColorMode,  } from "native-base";

import {Provider} from 'react-redux';
import { Text } from 'react-native';


function App(): JSX.Element {
  const {
    colorMode
  } = useColorMode();

    
  
  return (
  

  <Text>Hello</Text>
  );
}



export default App;
