import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {},
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 3,
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.5)',
    width: '100%',
    padding: 7,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#f1f2f6',
    textAlign: 'right',
  },
});
