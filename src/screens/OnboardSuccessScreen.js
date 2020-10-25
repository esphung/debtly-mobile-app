import React from 'react';

import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

import { NeuButton } from 'neumorphism-ui';

import colors from 'colors';

// shared components
import NeumorphicButton from 'components/Shared/NeumorphicButton';

// screen components
import DisplayImage from 'components/OnboardSuccessScreen/DisplayImage';

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  // basic font style
  text: {
    paddingHorizontal: 24,
    fontSize: 17,
    fontFamily: 'Poppins_500Medium',
  },
  title: {
    fontSize: 30,
    color: colors.plainGrey,
    fontFamily: 'Poppins_600SemiBold',
    padding: 4,
  },
  subtitle: {
    color: colors.darkGrey,
    textAlign: 'center',
  },
});

const OnboardSuccessScreen = () => {
    const view = (
      <SafeAreaView
        style={{
          // flexDirection: 'column',
          flex: 1,
          backgroundColor: colors.offGrey,
        }}
      >
        <View
          style={{
            flex: 1,
            // backgroundColor: 'powderblue',
          }}
        >
          {/* IMAGE */}
          <View style={{
            flex: 1,
            // backgroundColor: 'salmon',
          }}>
            <DisplayImage image={global.defaultPlaceholderImage} />
          </View>

          <View style={{
            flex: 0.8,
            alignItems: 'center',
            justifyContent: 'center',

            // borderWidth: 1,
            // borderColor: 'red',
            // borderStyle: 'solid',
          }}>
            {/* TITLE */}
            <Text style={[styles.text, styles.title]}>
              Let's go!
            </Text>

            {/* SUBTITLE */}
            <Text style={[styles.text, styles.subtitle]}>
              Duis minim magna proident aute ad ut adipisicing nisi reprehenderit incididunt laboris deserunt.
            </Text>
          </View>
        </View>
        <View style={{
          flex: 0.6,
          paddingLeft: 40,
          // left: screen.width / 5,
          // backgroundColor: 'skyblue',
        }}>
          <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            // flexDirection: 'row',
            paddingBottom: 14,

            // borderWidth: 1,
            // borderColor: 'red',
            // borderStyle: 'solid',
          }}>
            <NeuButton
              disabled
              noPressedState
              containerStyle={{
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
              }}
              style={{
                backgroundColor: '#64D1A1' + '30',
                // height: '30%',
                // width: '35%',
                height: 55, width: 45,
                borderRadius: 75,
              }}
                onPress={() => {
                  // Alert.alert("I was pressed")
                }}
                // onUnpress={() => {
                //   // Alert.alert("I was unpressed")
                // }}
              >
                <Text style={[
                  styles.title,
                  {
                    // opacity: 1,
                    fontSize: 23,
                    color: colors.turtleGreen,
                    textAlign: 'center',
                  }
                  ]}>
                  1
                </Text>
            </NeuButton>
            <Text style={
              [
                // styles.text,
                // styles.title,
              {
                fontSize: 20,
                fontFamily: 'Poppins_500Medium',
                marginLeft: 80,
                // paddingTop: 10,
                paddingLeft: 14,
                color: colors.plainGrey,
                position: 'absolute',
                left: 0,
                // right: screen.width / 2,

              }
              ]
            }>
              Create a profile
            </Text>
          </View>
          <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            // flexDirection: 'row',
            paddingBottom: 14,

            // borderWidth: 1,
            // borderColor: 'red',
            // borderStyle: 'solid',
          }}>
            <NeuButton
              disabled
              noPressedState
              containerStyle={{
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
              }}
              style={{
                backgroundColor: '#64D1A1' + '30',
                // height: '30%',
                // width: '35%',
                height: 55, width: 45,
                borderRadius: 75,
              }}
                onPress={() => {
                  // Alert.alert("I was pressed")
                }}
                // onUnpress={() => {
                //   // Alert.alert("I was unpressed")
                // }}
              >
                <Text style={[
                  styles.title,
                  {
                    // opacity: 1,
                    fontSize: 23,
                    color: colors.turtleGreen,
                    textAlign: 'center',
                  }
                  ]}>
                  2
                </Text>
            </NeuButton>
            <Text style={
              [
                // styles.text,
                // styles.title,
              {
                fontSize: 20,
                fontFamily: 'Poppins_500Medium',
                marginLeft: 80,
                // paddingTop: 10,
                paddingLeft: 14,
                color: colors.plainGrey,
                position: 'absolute',
                left: 0,
                // right: screen.width / 2,

              }
              ]
            }>
              Link a bank account
            </Text>
          </View>
          <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            // flexDirection: 'row',
            paddingBottom: 14,

            // borderWidth: 1,
            // borderColor: 'red',
            // borderStyle: 'solid',
          }}>
            <NeuButton
              disabled
              noPressedState
              containerStyle={{
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
              }}
              style={{
                backgroundColor: '#64D1A1' + '30',
                // height: '30%',
                // width: '35%',
                height: 55, width: 45,
                borderRadius: 75,
              }}
                onPress={() => {
                  // Alert.alert("I was pressed")
                }}
                // onUnpress={() => {
                //   // Alert.alert("I was unpressed")
                // }}
              >
                <Text style={[
                  styles.title,
                  {
                    // opacity: 1,
                    fontSize: 23,
                    color: colors.turtleGreen,
                    textAlign: 'center',
                  }
                  ]}>
                  3
                </Text>
            </NeuButton>
            <Text style={
              [
                // styles.text,
                // styles.title,
              {
                fontSize: 20,
                fontFamily: 'Poppins_500Medium',
                marginLeft: 80,
                // paddingTop: 10,
                paddingLeft: 14,
                color: colors.plainGrey,
                position: 'absolute',
                left: 0,
                // right: screen.width / 2,

              }
              ]
            }>
              Discover genius
            </Text>
          </View>

          <View style={{ flex: 1, }} />
          <View style={{ flex: 1, }} />
        </View>
        <View style={{
          flex: 0.3,
          justifyContent: 'center',
          // backgroundColor: 'steelblue',
        }}>
          <NeumorphicButton
            onPress={() => {}}
            title="Next"
            width={300}
          />
        </View>

      </SafeAreaView>
    );
return view;
};

export default OnboardSuccessScreen;
