import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { LogBox } from 'react-native';

import Home from './src/components/Home';
import ToDoList from './src/components/ToDoList';
import CountryList from './src/components/CountryList';
import Preview from './src/components/Preview';
import DetailImage from './src/components/DetailImage';
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);
const Stack = createStackNavigator();

export default function App() {
  const styles = {
    headerTitleStyle:{
      color: 'red',
      alignSelf: 'center'
    },
    headerShadowVisible: false, 
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="ToDoList" component={ToDoList} options={styles} />
        <Stack.Screen name="CountryList" component={CountryList} options={styles}/>
        <Stack.Screen name="Preview" component={Preview} options={styles} />
        <Stack.Screen name="DetailImage" component={DetailImage} options={styles} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
