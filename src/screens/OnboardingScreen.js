import React from 'react';
import { View, Text, Button } from 'react-native';

function OnboardingScreen({ navigation, route }) {
  // console.log('route.params: ', route.params);
  const { slideId } = route.params;
  const view = (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        Onboarding Screen
        {' '}
        { slideId }
      </Text>
      <Button
        title="Go to next Onboarding slide"
        onPress={() => navigation.push('Onboarding', {
          slideId: slideId + 1,
        })}
      />
      <Button title="Go to Welcome Screen" onPress={() => navigation.navigate('Welcome')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
  return view;
}

export default OnboardingScreen;
