import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {styles} from './AboutUsStyle';

function AboutUsScreen() {
  return (
    <SafeAreaView style={[styles.container]}>
      <Text style={[styles.txtsub, {marginTop: '50%', alignSelf: 'center'}]}>
        Coming soon
      </Text>
    </SafeAreaView>
  );
}

export default AboutUsScreen;
