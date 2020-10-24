import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// screen
import WelcomeScreen from './src/screens/WelcomeScreen';
// import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            // headerTintColor: 'green',
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            // },
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Login"
                // color="green"
              />
            ),
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            headerLeft: () => {}, // show nothing in top left
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
