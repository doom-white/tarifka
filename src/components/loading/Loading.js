import React from 'react';
import AnimatedLottieView from 'lottie-react-native';

const Loading = () => {
  return (
    <AnimatedLottieView
      source={require('../../assets/jsons/98432-loading.json')}
      autoPlay
      loop
    />
  );
};

export default Loading;
