import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from './src/screens/HomeScreen'
import CreateListScreen from './src/screens/CreateListScreen';

const Stack = createStackNavigator()

const App = () => {
  return(
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name='Home'
            component={HomeScreen}
          />
          <Stack.Screen 
            name='Create List'
            component={CreateListScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

export default App;
