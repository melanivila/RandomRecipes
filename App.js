import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationController from './src/navigator/NavigationController';
// import HomeScreen from './src/screens/HomeScreen';
// import RandomRecipeScreen from './src/screens/RandomRecipeScreen';

function App() {
  return (
    <NavigationContainer>
      <NavigationController />
      {/* <HomeScreen /> */}
      {/* <RandomRecipeScreen /> */}
    </NavigationContainer>
  );
}

export default App;
