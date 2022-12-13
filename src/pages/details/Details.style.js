import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 3,
  },
  titleMeal: {
    fontSize: 35,
    fontWeight: 'bold',
    padding: 7,
  },
  titleArea: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 7,
  },
  instructions: {
    fontSize: 19,
    textAlign: 'justify',
    padding: 7,
  },
  btnYoutube: {
    backgroundColor: '#eb3b5a',
    padding: 11,
    marginHorizontal: 15,
    marginVertical: 7,
    borderRadius: 7,
  },
  btnYoutubeText: {
    color: '#f1f2f6',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
