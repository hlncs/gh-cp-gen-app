import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AddInstrumentScreen from './screens/AddInstrumentScreen';
import InstrumentDetailScreen from './screens/InstrumentDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Portfolio" component={HomeScreen} />
        <Stack.Screen name="Add Instrument" component={AddInstrumentScreen} />
        <Stack.Screen name="Instrument Details" component={InstrumentDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}