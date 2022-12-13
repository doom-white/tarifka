import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './MainScreen.style';

const MainScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.image}
      />
      <Text style={styles.text}>Tarifka</Text>
      <Text style={styles.subText}>Pişirerek mutlu olun...</Text>
      <View style={styles.btnContainer}>
        <Pressable onPress={() => navigation.navigate('categories')}>
          <Text style={styles.btnText}>Devam</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default MainScreen;
