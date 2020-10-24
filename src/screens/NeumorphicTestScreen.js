import React from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from 'react-native';

import colors from 'colors';

// shared components
import NeumorphicButton from 'components/Shared/NeumorphicButton';

import DisplayImage from 'components/WelcomeScreen/DisplayImage';

import HeroText from 'components/WelcomeScreen/HeroText';

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  northPanel: {
    flex: 1,
    backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'center',

    // borderWidth: 1,
    // borderColor: 'red',
    // borderStyle: 'solid',
  },
  soutPanel: {
    flex: 0.25,
    // backgroundColor: 'skyblue',
  },
});

function WelcomeScreen({ navigation }) {
  const view = (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.offGrey,
      }}
    >
      {/* NORTH PANEL */}
      <View style={styles.northPanel}>
        {/* Screen Image Container */}
        <View
          style={{
            flex: 1,
            width: screen.width,

            // borderWidth: 1,
            // borderColor: 'blue',
            // borderStyle: 'solid',
          }}
        >
          <DisplayImage />
        </View>
        {/* Screen Message Container */}
        <View
          style={{
            flex: 0.4,
            width: screen.width,

            // borderWidth: 1,
            // borderColor: 'blue',
            // borderStyle: 'solid',
          }}
        >
          <HeroText />
        </View>

      </View>

      {/* SOUTH PANEL */}
      <View style={styles.soutPanel}>

    {/* Get Started Button Container */}
        <View
          style={{
            flex: 0.4,
            width: screen.width,
            justifyContent: 'center',
            alignItems: 'center',

            borderWidth: 1,
            borderColor: 'blue',
            borderStyle: 'solid',
          }}
        >
          <NeumorphicButton
            onPress={() => alert('Pressed Get Started!')}
            title="Get Started"
          />
          {/*
            Button
              title="Go to Onboarding"
              onPress={() => navigation.navigate('Onboarding', {
                slideId: 0,
              })}
            />
          */}
        </View>
      </View>

    </SafeAreaView>
  );
  return view;
}

export default WelcomeScreen;
