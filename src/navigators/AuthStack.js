import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import colors from 'colors';

// screen
import WelcomeScreen from 'screens/WelcomeScreen';
// import HomeScreen from 'screens/HomeScreen';
// import DetailsScreen from 'screens/DetailsScreen';
import OnboardingScreen from 'screens/OnboardingScreen';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerStyle: {
              backgroundColor: colors.offGrey, // 'transparent',
            },
            headerTitle: '',
            headerTintColor: 'white', // 'transparent',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => alert('Hello')}
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 10,

                  // borderWidth: 1,
                  // borderColor: 'black',
                  // borderStyle: 'solid',
                }}
              >
                <Text style={{
                  color: colors.turtleGreen,
                  fontWeight: 'bold',
                }}
                >
                  Login
                </Text>
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{
            headerLeft: () => {}, // show nothing in top left
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AuthStack;
