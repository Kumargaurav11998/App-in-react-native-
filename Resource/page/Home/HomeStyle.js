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
    fontSize: 16,
    color: colors.black,
    textAlign: 'center',
    alignSelf: 'center',
    // fontFamily: 'MartelSans-Black',
  },
  hedimg: {
    width: width,
  },
  cardstyle: {
    borderRadius: 10,
    elevation: 5,
  },
  txt: {
    color: colors.black,
    textAlign: 'left',
    fontFamily: 'MartelSans-Black',
  },
  flv: {
    // height: height - 150,
  },
  cs: {
    alignSelf: 'center',
  },
  cso: {
    alignSelf: 'center',
    marginTop: '5%',
  },
});
