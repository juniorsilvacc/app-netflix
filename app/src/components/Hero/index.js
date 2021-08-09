/* eslint-disable prettier/prettier */
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {View, Text, ImageBackground, Image} from 'react-native';

import styles from './styles';

const Hero = () => {
  return (
    <>
      <ImageBackground
        source={{uri: 'https://i.imgur.com/2AyivZl.jpg'}}
        style={styles.hero}
      >
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={{uri: 'https://i.imgur.com/8owLMuZ.png'}}
        />

        <View style={styles.containertop10}>
          <Image
            style={styles.badgetop10}
            source={require('../../assets/badge-top-10.png')}
            resizeMode="contain"
          />
          <Text style={styles.top10Text}>Top 1 de hoje no Brasil</Text>
        </View>
        <LinearGradient
          style={styles.gradient}
          colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']}
        />
      </ImageBackground>
    </>
  );
};

export default Hero;
