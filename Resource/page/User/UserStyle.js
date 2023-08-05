import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appdefultColor,
  },
  AvatarContainer: {
    alignSelf: 'center',
    marginTop: height / 6,
    height: height / 1.5,
    width: width - 50,
  },
  avatarStyle: {
    resizeMode: 'contain',
  },
  texthead: {
    fontSize: 18,
    color: colors.black,
    textAlign: 'center',
    alignSelf: 'center',
    fontFamily: 'MartelSans-Black',
  },
  viewStyles: {flexDirection: 'row', marginLeft: '5%', marginTop: '5%'},
  txtsub: {
    paddingTop: '1%',
    color: colors.black,
    fontFamily: 'MartelSans-Black',
    fontSize: 15,
  },
  mainview: {marginTop: '15%'},
});
