import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/HomeScreen';
import Rental from './components/Rental';
import Logistic from './components/Logistic';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Rental" component={Rental} />
        <Stack.Screen name="Logistic" component={Logistic} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
