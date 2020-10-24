import React from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';

function WelcomeScreen({ navigation }) {
  const view = (
    <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        {/*<View style={{ flex: 0.3, backgroundColor: 'powderblue' }} />*/}
        <View style={{ flex: 1, backgroundColor: 'steelblue' }} />
        <View style={{ flex: 0.4, backgroundColor: 'skyblue' }}>
          <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
          />
        </View>

      </SafeAreaView>
  );
  return view;
}

export default WelcomeScreen;