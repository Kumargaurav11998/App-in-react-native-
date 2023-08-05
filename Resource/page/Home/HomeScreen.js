import React, {useRef, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import {styles} from './HomeStyle';
import {SliderBox} from 'react-native-image-slider-box';
import {colors} from '../../utils/colors';
import {Avatar, Card} from '@rneui/base';
import {data} from '../../Helper/Constant';
import {Overlay} from '@rneui/themed';
function HomeScreen() {
  const images = [
    'http://pagriwale.com/wp-content/uploads/2021/04/banner-1-1.jpg',
    'http://pagriwale.com/wp-content/uploads/2021/04/1234aatabanner.jpg',
    'http://pagriwale.com/wp-content/uploads/2021/04/33333-3.jpg',
    'http://pagriwale.com/wp-content/uploads/2021/04/Untitled-3.jpg',
    'http://pagriwale.com/wp-content/uploads/2021/04/11112-1.jpg', // Network image
  ];
  const [visible, setVisible] = useState(false);
  const [isdata, setisdata] = useState([]);
  const toggleOverlay = item => {
    setVisible(!visible);
    setisdata(item);
  };

  const [headeraction, setheaderaction] = useState(null);
  const ScrollY = useRef(new Animated.Value(0)).current;
  const TranslateY = ScrollY.interpolate({
    inputRange: [0, 10],
    outputRange: [0, -1],
  });
  console.log(isdata);
  return (
    <SafeAreaView style={[styles.container]}>
      <Animated.View
        style={[{opacity: 5, transform: [{translateY: TranslateY}]}]}
        onLayout={e => {
          setheaderaction(e.nativeEvent.layout);
        }}>
        <Text>yjtjuk</Text>
      </Animated.View>

      <View style={[styles.flv]}>
        <Animated.FlatList
          style={[{transform: [{translateY: TranslateY}], marginBottom: -10.5}]}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: ScrollY}}}],
            {useNativeDriver: false},
          )}
          stickyHeaderIndices={[1]}
          StickyHeaderComponent={item => {
            return (
              <View style={[styles.hedimg]}>
                {/* <SliderBox
                  images={images}
                  resizeMode="contain"
                  // resizeMethod={'resize'}
                  autoplay={true}
                  sliderBoxHeight={110}
                  dotColor={colors.red}
                /> */}
                <Text>yutututu</Text>
                <Text
                  onLayout={e => {
                    setheaderaction(e.nativeEvent.layout);
                  }}>
                  ygtuytiu
                </Text>
              </View>
            );
          }}
          stickyHeaderHiddenOnScroll={false}
          data={data}
          renderItem={({item}) => {
            return (
              <Card containerStyle={[styles.cardstyle]}>
                <TouchableOpacity>
                  <Card.Title style={[styles.texthead]}>
                    {' '}
                    {item.name}
                  </Card.Title>
                  <Card.Divider />
                  <Avatar
                    onPress={() => toggleOverlay(item)}
                    size={100}
                    source={item.img}
                    containerStyle={[styles.cs]}
                  />

                  <Text style={[styles.txt]}>
                    {item.subname} {item.dis.substring(0, 150)}
                    {'....'}
                  </Text>
                </TouchableOpacity>
              </Card>
            );
          }}
        />
      </View>
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text style={[styles.txt, {alignSelf: 'center'}]}>{isdata.name}</Text>
        <Avatar
          //  onPress={() => toggleOverlay(item)}
          size={270}
          source={isdata.img}
          containerStyle={[styles.cso]}
        />
      </Overlay>
    </SafeAreaView>
  );
}

export default HomeScreen;
