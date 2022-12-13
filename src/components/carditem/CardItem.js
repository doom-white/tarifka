import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './CardItem.style';

const CardItem = ({data, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Image style={styles.image} source={{uri: data.strCategoryThumb}} />
          <Text style={styles.text}>{data.strCategory}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CardItem;
