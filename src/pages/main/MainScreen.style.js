import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#c44569',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 1,
  },
  image: {
    width: 380,
    height: 380,
    resizeMode: 'contain',
    // marginTop: 100,
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#f7b731',
    // marginTop: 25,
  },
  subText: {
    fontSize: 19,
    color: '#f1f2f6',
    textAlign: 'center',
  },
  btnText: {
    fontSize: 25,
    color: '#f1f2f6',
    textAlign: 'center',
  },
  btnContainer: {
    backgroundColor: '#f7b731',
    padding: 11,
    paddingHorizontal: 33,
    // marginTop: 15,
    borderRadius: 25,
  },
});
