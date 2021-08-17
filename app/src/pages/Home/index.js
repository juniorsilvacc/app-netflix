/* eslint-disable prettier/prettier */
import React from 'react';
import {View, ScrollView} from 'react-native';
import { Button, Title } from 'react-native-paper';

import Header from '../../components/Header';
import Hero from '../../components/Hero';
import ButtonVertical from '../../components/ButtonVerticalHero';
import Previas from '../../components/Previas';
import Session from '../../components/Session';

import styles from './styles';

const Home = () => {
  return (
    <>
      <ScrollView style={styles.container}>
        <Header/>
        <Hero/>

        <View style={styles.menuHeader}>
          <ButtonVertical icon="plus" text="Minha Lista" />

          <Button
            mode="contained"
            icon="play"
            color="#fff"
            uppercase={false}
            onPress={() => console.log('Pressed')}
          >
            Assistir
          </Button>

          <ButtonVertical icon="information-outline" text="Minha Lista" />
        </View>

        <View style={styles.previaContainer}>
          <Title style={styles.previaTitle}>Prévias</Title>
          <Previas/>
        </View>

        <View>

          {[1,2,3,4].map((session, index) => (
            <Session key={index} />
          ))}
        </View>

      </ScrollView>
    </>
  );
};

export default Home;
