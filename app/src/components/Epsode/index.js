/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from './styles';

const SessionSerie = () => {
  return (
    <>
      {[1,2,3,4].map((epsode, index) => (
        <TouchableOpacity key={index}>
        <View style={styles.viewEpsodeo}>
          <Image style={styles.thumb} source={{uri: 'https://i.imgur.com/lOnb2zZ.jpg'}} />

          <View style={styles.descriptionEpsodeo}>
            <Text style={styles.titleEpsodeo}>1. Nome do Episódeo</Text>
            <Text style={styles.durationEpsdeo}>45min</Text>
          </View>
        </View>

        <Text style={styles.descriptionEpsode}>
          Série sobre uma família de gângsteres na Inglaterra no começo do século 20.
        </Text>
      </TouchableOpacity>
      ))}
    </>
  );
};

export default SessionSerie;
