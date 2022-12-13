import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from './pages/categories';
import Meals from './pages/meals';
import Details from './pages/details';
import MainScreen from './pages/main';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="default"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="categories"
          component={Categories}
          options={{
            headerStyle: {backgroundColor: '#c44569'},
            headerTintColor: '#f1f2f6',
            headerTitle: 'Categories',
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name="meals"
          component={Meals}
          options={{
            headerStyle: {backgroundColor: '#c44569'},
            headerTintColor: '#f1f2f6',
            headerTitle: 'Meals',
          }}
        />
        <Stack.Screen
          name="details"
          component={Details}
          options={{
            headerStyle: {backgroundColor: '#c44569'},
            headerTintColor: '#f1f2f6',
            headerTitle: 'Instructions',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
