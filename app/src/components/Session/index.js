/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TouchableOpacity, ImageBackground, Image, FlatList} from 'react-native';
import {Title} from 'react-native-paper';

import styles from './styles';

const Session = () => {
  return (
    <View style={styles.container}>
      <Title style={styles.sessionTitle}>Session</Title>
      <FlatList
        style={styles.list}
        horizontal
        data={[1, 2, 3, 4, 5]}
        renderItem={({item, index}) => (
          <TouchableOpacity key={index}>
            <ImageBackground style={[styles.capa, {marginRight: 10, marginLeft: index === 0 ? 20 : 0}]} source={{uri: 'https://i.imgur.com/iDm1pXK.jpg'}}>
              <Image resizeMode="contain" style={styles.logo} source={{uri: 'https://i.imgur.com/oytW0ZC.png'}}/>
            </ImageBackground>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Session;
