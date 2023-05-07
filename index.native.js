import React from 'react';
import {AppRegistry} from 'react-native';
import Apps from './src/App.tsx';
import {name as appName} from './src/App.json';

AppRegistry.registerComponent(appName, () => Apps);