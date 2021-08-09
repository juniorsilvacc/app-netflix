/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';

import Header from '../../components/Header';
import Hero from '../../components/Hero';

import styles from './styles';

const Home = () => {
  return (
    <>
      <View style={styles.container}>
        <Header/>
        <Hero/>
      </View>
    </>
  );
};

export default Home;
