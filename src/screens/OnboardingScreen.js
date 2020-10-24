import React, { useState } from 'react';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  // Button,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';

import colors from 'colors';

// shared components
import NeumorphicButton from 'components/Shared/NeumorphicButton';

// screen components
import DisplayImage from 'components/OnboardingScreen/DisplayImage';

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  southPanel: { flex: 0.3, backgroundColor: 'powderblue' },
});

const slides = [
  {
    id: 0,
    image: global.defaultPlaceholderImage,
  },
  {
    id: 1,
    image: global.defaultPlaceholderImage, // null,
  },
  {
    id: 2,
    image: global.defaultPlaceholderImage, // null,
  },
  {
    id: 3,
    image: global.defaultPlaceholderImage, // null,
  },
  {
    id: 4,
    image: global.defaultPlaceholderImage, // null,
  },
  {
    id: 5,
    image: global.defaultPlaceholderImage, // null,
  },
];

function OnboardingScreen({ navigation, route }) {
  // console.log('route.params: ', route.params);

  const { slideId } = route.params;

  const [currentSlide, setCurrentSlide] = useState(slides[slideId]);
  console.log('currentSlide: ', currentSlide);

  const showNextSlide = () => {
    const nextSlideId = slideId + 1;
    if (nextSlideId >= slides.length) return;
    navigation.push('Onboarding', {
      slideId: slideId + 1,
    });
  };
  const showPreviousSlide = () => {
    if (currentSlide.id > 0) {
      setCurrentSlide(slides.find((item) => item.id + 1 === currentSlide.id));
    }
    navigation.goBack();
  };
  const backBtnPressed = () => showPreviousSlide();
  // const view = (
  //   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  //     <Text>
  //       Onboarding Screen
  //       {' '}
  //       { slideId }
  //     </Text>
  //     <Button
  //       title="Go to next Onboarding slide"
  //       onPress={showNextSlide}
  //     />
  //     <Button title="Go to Welcome Screen" onPress={() => navigation.navigate('Welcome')} />
  //     <Button title="Go back" onPress={() => navigation.goBack()} />
  //     <Button
  //       title="Go back to first screen in stack"
  //       onPress={() => navigation.popToTop()}
  //     />
  //   </View>
  // );
  // return view;

  const view = (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.offGrey,
        paddingTop: Constants.statusBarHeight,
      }}
    >
      <StatusBar style="dark" />
      <View style={{ flex: 1, backgroundColor: 'steelblue' }}>
        <DisplayImage image={currentSlide.image} />
      </View>
      <View style={{ flex: 0.5, backgroundColor: 'skyblue' }} />
      <View style={styles.southPanel}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            // justifyContent: 'space-between',
            // alignItems: 'center',
            // paddingHorizontal: 16,

            // borderWidth: 1,
            // borderColor: 'red',
            // borderStyle: 'solid',
          }}
        >
          {/* LEFT SIDE */}
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'flex-start',
              // backgroundColor: 'salmon',

              // borderWidth: 1,
              // borderColor: 'red',
              // borderStyle: 'solid',
            }}
          >
            <TouchableOpacity
              onPress={backBtnPressed}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                // backgroundColor: 'salmon',
                flex: 1,
                height: '100%',
                width: screen.width * 0.3, // '50%',
              }}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: colors.matteBlack,
                  fontFamily: 'Poppins_500Medium',
                  // fontFamily: 'Poppins_600SemiBold',
                }}
              >
                Back
              </Text>
            </TouchableOpacity>
          </View>
          {/* RIGHT SIDE */}
          <View
            style={{
              flex: 0.4,
              paddingBottom: 16,
              justifyContent: 'center',
              alignItems: 'flex-end',

              // borderWidth: 1,
              // borderColor: 'red',
              // borderStyle: 'solid',
              // width: screen.width * 0.3, // '50%',
            }}
          >
            <NeumorphicButton
              title=">"
              onPress={showNextSlide}
              // width={screen.width * 0.15}
              width={70}
              fontSize={28}
            />
          </View>
        </View>
      </View>

    </SafeAreaView>
  );
  return view;
}

export default OnboardingScreen;
