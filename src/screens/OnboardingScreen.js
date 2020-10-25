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

import PaginationBar from 'components/OnboardingScreen/PaginationBar';

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  northPanel: {
    flex: 1,
    // backgroundColor: 'steelblue',
  },
  centerPanel: {
    flex: 0.5,
    // backgroundColor: 'skyblue',
  },
  southPanel: {
    flex: 0.3,
    // backgroundColor: 'powderblue',
  },
  // basic font style
  text: {
    fontSize: 17,
    fontFamily: 'Poppins_500Medium',
  },
  title: {
    flex: 0.4,
    fontSize: 20,
    color: colors.darkGrey,
    fontFamily: 'Poppins_600SemiBold',
    padding: 4,
  },
  subtitle: {
    flex: 1,
    // fontSize: 17,
    color: colors.plainGrey,
    // padding: 18,
    textAlign: 'center',
  },
});

const slides = [
  {
    id: 0,
    image: global.slide001Image,
    title: 'Interest Tracking',
    subtitle: 'Track the interest payments on your credit cards and see how much money you could be saving.',
  },
  {
    id: 1,
    image: global.slide002Image,
    title: 'Personalized Tips',
    subtitle: 'We give you personalized tips on how to save money with interest.',
  },
  {
    id: 2,
    image: global.slide003Image,
    title: 'Real-time Notifications',
    subtitle: 'Recieve alerts on your spending activities and trends.',
  },
  {
    id: 3,
    image: global.slide004Image,
    title: 'Customizable budgeting',
    subtitle: 'Make a budget that fits your needs and goals.',
  },
  {
    id: 4,
    image: global.slide005Image,
    title: 'In-Depth Analytics',
    subtitle: 'Visualize your data with customizable graphs and explanations.',
  },
  {
    id: 5,
    image: global.slide006Image,
    title: 'Control Your Finances',
    subtitle: 'Take control of your life and take a step towards financial independence.',
  },
];

function OnboardingScreen({ navigation, route }) {
  // console.log('route.params: ', route.params);

  const { slideId } = route.params;

  const [currentSlide, setCurrentSlide] = useState(slides[slideId]);
  // console.log('currentSlide: ', currentSlide);

  const showNextSlide = () => {
    const nextSlideId = slideId + 1;
    if (nextSlideId >= slides.length) {
      showSuccessScreen();
      return;
    }
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
  const showSuccessScreen = () => {
    navigation.push('OnboardSuccess');
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
      {/* NORTH PANEL */}
      <View style={styles.northPanel}>
        <DisplayImage image={currentSlide.image} />
      </View>
      {/* CENTER PANEL */}
      <View style={styles.centerPanel}>
        {/* SLIDE MESSAGE */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 24,

            // borderWidth: 1,
            // borderColor: 'red',
            // borderStyle: 'solid',
          }}
        >
          <Text style={[styles.text, styles.title]}>
            { currentSlide.title }
          </Text>

          <Text style={[styles.text, styles.subtitle]}>
            { currentSlide.subtitle }
          </Text>
        </View>

        {/* SLIDE PAGINATION BAT */}
        <View
          style={{
            flex: 0.5,
            // backgroundColor: 'salmon',
          }}
        >
          <PaginationBar active={currentSlide.id} length={slides.length} />
        </View>
      </View>
      {/* SOUTH PANEL */}
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
