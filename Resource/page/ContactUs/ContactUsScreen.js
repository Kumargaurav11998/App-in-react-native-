import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {styles} from './Constactusstyle';
function ContactusSreen() {
  return (
    <SafeAreaView style={[styles.container]}>
      <Text style={[styles.txtsub, {marginTop: '50%', alignSelf: 'center'}]}>
        Coming soon
      </Text>
    </SafeAreaView>
  );
}
export default ContactusSreen;
