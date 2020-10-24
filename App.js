/*
FILENAME:     App.js
PURPOSE:      entry point for debtly app
AUTHOR:       Eric Phung
CREATED:      10/24/2020 11:49 AM
*/
import React from 'react';
// import { Text, View } from 'react-native';

import AuthStack from 'navigators/AuthStack';

const App = () => {
  const view = <AuthStack />;
  return view;
};
export default App;
