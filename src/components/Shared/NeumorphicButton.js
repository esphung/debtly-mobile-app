import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
  View,
  Text,
  // TouchableOpacity,
  // Image,
  // Alert,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { NeuButton } from 'neumorphism-ui';

import colors from 'colors';

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    color: 'white',
    fontFamily: 'Poppins_600SemiBold',
  },
  gradient: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,

    // borderWidth: 1,
    // borderColor: 'red',
    // borderStyle: 'solid',
    // backgroundColor: 'transparent',
  },
});

const NeumorphicButton = ({
  title,
  onPress,
}) => {
  const view = (
    <NeuButton
      style={{
        alignSelf: 'center',
        // maxHeight: screen.height * 0.08,
        height: 70,
        width: screen.width * 0.45,
        // width: '100%',
        borderRadius: 9,
        // borderWidth: 1,
        // borderColor: 'red',
        // borderStyle: 'solid',
        // alignSelf: 'center',
        // backgroundColor: colors.buttonGreenLeftEndTransientColor,
      }}
      noPressedState
      onPress={onPress}
      // onPress={() => {
      //   Alert.alert('I was pressed');
      // }}
    >
      <LinearGradient
        // colors={['#A768FE', '#97B4FA']}
        colors={[
          colors.buttonGreenLeftEndTransientColor,
          `${colors.buttonGreenLeftEndTransientColor}70`,
        ]}
        start={[0, 0.5]}
        end={[1, 0.5]}
        location={[0.25, 0.4, 1]}
        style={styles.gradient}
      >
        <View
          style={{
            // flexDirection: 'row',
            // alignItems: 'center',
            // justifyContent: 'space-between',
            // width: '60%',
          }}
        >
          {/*
            <Image
              resizeMode='contain'
              style={{ height: 30, width: 30 }}
              source={{ uri: 'https://www.freepnglogos.com/uploads/heart-png/emoji-heart-33.png' }}
            />
          */}
          <Text style={styles.title}>
            { title }
          </Text>
        </View>
      </LinearGradient>
    </NeuButton>
  );
  return view;
};

export default NeumorphicButton;
