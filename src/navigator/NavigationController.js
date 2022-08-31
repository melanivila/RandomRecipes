import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import RandomRecipeScreen from '../screens/RandomRecipeScreen';
import Recipe from '../screens/RecipeDetailsScreen';
import { RandomOptionsScreen } from '../screens/RandomOptionsScreen';
import { SearchScreen } from '../screens/SearchScreen';

const Stack = createStackNavigator();

export default function NavigationController() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="RandomOptionsScreen" component={RandomOptionsScreen} />
      <Stack.Screen name="RandomRecipeScreen" component={RandomRecipeScreen} />
      <Stack.Screen name="Recipe" component={Recipe} />
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
}
