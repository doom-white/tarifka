import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#f1f2f6',
    margin: 7,
    marginLeft: 25,
    padding: 7,
    paddingHorizontal: 11,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    overflow: 'hidden',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#c44569',
  },
});
