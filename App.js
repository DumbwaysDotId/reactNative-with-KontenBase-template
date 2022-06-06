import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Import Screen
import Todos from './src/screens/Todos';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Todos" component={Todos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
