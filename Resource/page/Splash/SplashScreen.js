import {Avatar} from '@rneui/base';
import React, {useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {styles} from './SplashStyle';

function SplashScreen(props) {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace('TabNavigation');
    }, 3000);
  });
  return (
    <SafeAreaView style={[styles.container]}>
      <Avatar
        // size={400}
        source={require('../../Assets/photo/logo.png')}
        avatarStyle={[styles.avatarStyle]}
        containerStyle={[styles.AvatarContainer]}
      />
    </SafeAreaView>
  );
}

export default SplashScreen;
