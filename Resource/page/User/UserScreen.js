import {Avatar} from '@rneui/base';
import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../../utils/colors';
import {styles} from './UserStyle';

function UserScreen(props) {
  return (
    <SafeAreaView style={[styles.container]}>
      <Text style={[styles.texthead]}>Account</Text>
      <View style={[styles.mainview]}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('AboutUsScreen')}
          style={[styles.viewStyles]}>
          <Avatar icon={{name: 'user', type: 'entypo', color: colors.black}} />
          <Text style={[styles.txtsub]}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('ContactusSreen')}
          style={[styles.viewStyles]}>
          <Avatar
            icon={{name: 'contacts', type: 'antdesign', color: colors.black}}
          />
          <Text style={[styles.txtsub]}>Contact Us</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default UserScreen;
