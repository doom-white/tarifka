import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './Menu.style';

const Menu = ({menu, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image source={{uri: menu.strMealThumb}} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{menu.strMeal}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Menu;
