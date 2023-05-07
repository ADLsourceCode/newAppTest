/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
/* eslint-disable */ 

import React from 'react';
import { NativeBaseProvider, Box, useColorMode } from "native-base";

import {Provider} from 'react-redux';
import {store} from '../src/redux/store';

import {customTheme} from './utils/theme';
import { Feed } from './components/feed';

function App(): JSX.Element {
  const {
    colorMode
  } = useColorMode();

    
  
  return (
    <NativeBaseProvider theme={customTheme}>
    <Provider store={store}>

    <Feed/>
    
    </Provider>
    </NativeBaseProvider>
  );
}



export default App;
