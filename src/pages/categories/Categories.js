import React from 'react';
import {FlatList} from 'react-native';
import {API_URL} from '@env';
import useFetch from '../../hooks/useFetch';
import CardItem from '../../components/carditem';
import styles from './Categories.style';
import Loading from '../../components/loading';
import Error from '../../components/errors';

const Categories = ({navigation}) => {
  const {loading, error, response} = useFetch(`${API_URL}/categories.php`);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const handleSelectedCat = category => {
    navigation.navigate('meals', category.strCategory);
  };

  const renderResponse = ({item}) => (
    <CardItem data={item} onSelect={() => handleSelectedCat(item)} />
  );

  return (
    <FlatList
      data={response.categories}
      renderItem={renderResponse}
      style={styles.container}
    />
  );
};

export default Categories;
