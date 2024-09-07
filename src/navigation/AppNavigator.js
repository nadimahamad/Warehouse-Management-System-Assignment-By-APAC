import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import InventoryScreen from '../screens/InventoryScreen';
import ItemDetailScreen from '../screens/ItemDetailScreen';
import AddItemScreen from '../screens/AddItemScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Inventory" component={InventoryScreen} />
      <Stack.Screen name="ItemDetail" component={ItemDetailScreen} />
      <Stack.Screen name="AddItem" component={AddItemScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
