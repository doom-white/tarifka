import React from 'react';
import {View, Text, Image, Pressable, Linking, ScrollView} from 'react-native';
import useFetch from '../../hooks/useFetch';
import {API_URL} from '@env';
import Loading from '../../components/loading';
import Error from '../../components/errors';
import styles from './Details.style';

const Details = ({route}) => {
  const id = route.params;
  const {loading, error, response} = useFetch(`${API_URL}/lookup.php?i=${id}`);
  const renderedData = response.meals;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <Image
        source={{uri: renderedData[0].strMealThumb}}
        style={styles.image}
      />
      <Text style={styles.titleMeal}>{renderedData[0].strMeal}</Text>
      <Text style={styles.titleArea}>{renderedData[0].strArea}</Text>
      <ScrollView>
        <Text style={styles.instructions}>
          {renderedData[0].strInstructions}
        </Text>
      </ScrollView>
      <Pressable
        onPress={() => Linking.openURL(renderedData[0].strYoutube)}
        style={styles.btnYoutube}>
        <Text style={styles.btnYoutubeText}>Wacth on Youtube</Text>
      </Pressable>
    </View>
  );
};

export default Details;
