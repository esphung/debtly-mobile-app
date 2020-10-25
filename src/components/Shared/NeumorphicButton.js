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
    // fontFamily: 'Poppins_600SemiBold',
    fontFamily: 'Poppins_500Medium',
  },
  gradient: {
    // flex: 1,
    // width: '100%',
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
  width,
  fontSize,
}) => {
  const view = (
    <NeuButton
      style={{
        alignSelf: 'center',
        maxHeight: screen.height * 0.08,
        height: 70,
        // maxWidth: screen.width * 0.45,
        width: width,
        borderRadius: 9,
        // borderWidth: 1,
        // borderColor: 'red',
        // borderStyle: 'solid',
        // alignSelf: 'center',
        // backgroundColor: '#e0e5ec' // colors.buttonGreenLeftEndTransientColor,
      }}
      noPressedState
      onPress={onPress}
      // onPress={() => {
      //   Alert.alert('I was pressed');
      // }}
    >
      <View
        style={{
          width: width,
          // flexDirection: 'row',
          // alignItems: 'center',
          // justifyContent: 'space-between',
          // width: '60%',
          opacity: 0.9,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        }}
      >
        <LinearGradient
          // colors={['#A768FE', '#97B4FA']}
          colors={[
            colors.buttonGreenLeftEndTransientColor,
            `${colors.buttonGreenLeftEndTransientColor}70`,
          ]}
          start={[0, 1]}
          end={[1, 0]}
          location={[0, 0.4, 1]}
          style={styles.gradient}
        >
          {/*
            <Image
              resizeMode='contain'
              style={{ height: 30, width: 30 }}
              source={{ uri: 'https://www.freepnglogos.com/uploads/heart-png/emoji-heart-33.png' }}
            />
          */}
          <Text
            style={[styles.title, {
              fontSize: fontSize ? fontSize : styles.title.fontSize,
            }]}
          >
            { title }
          </Text>
        </LinearGradient>
      </View>
    </NeuButton>
  );
  return view;
};

export default NeumorphicButton;
