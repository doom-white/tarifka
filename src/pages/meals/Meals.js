import React from 'react';
import {FlatList} from 'react-native';
import {API_URL} from '@env';
import useFetch from '../../hooks/useFetch';
import Menu from '../../components/menu';
import Loading from '../../components/loading';
import Error from '../../components/errors';

const Meals = ({navigation, route}) => {
  const category = route.params;
  const {loading, error, response} = useFetch(
    `${API_URL}/filter.php?c=${category}`,
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const handleSelectedMeal = meal => {
    navigation.navigate('details', meal.idMeal);
  };

  return (
    <FlatList
      data={response.meals}
      renderItem={({item}) => (
        <Menu menu={item} onSelect={() => handleSelectedMeal(item)} />
      )}
    />
  );
};

export default Meals;
