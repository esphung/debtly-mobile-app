import React from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import colors from 'colors';

const styles = StyleSheet.create({
  northPanel: {
    flex: 1,
    backgroundColor: 'steelblue',
  },
  soutPanel: {
    flex: 0.5,
    backgroundColor: 'skyblue',
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
      <View style={styles.northPanel} />
      <View style={styles.soutPanel}>
        <Button
          title="Go to Onboarding"
          onPress={() => navigation.navigate('Onboarding', {
            slideId: 0,
          })}
        />
      </View>

    </SafeAreaView>
  );
  return view;
}

export default WelcomeScreen;
