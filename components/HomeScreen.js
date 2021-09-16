import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IconButton, Colors } from 'react-native-paper';

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <IconButton
        icon="car"
        color={Colors.red500}
        size={40}
        onPress={() => navigation.navigate('Rental')}
      />
      
      <IconButton
        icon="truck"
        color={Colors.red500}
        size={40}
        onPress={() => navigation.navigate('Logistic')}
      />
    </View>
  );
}  

export default Home;