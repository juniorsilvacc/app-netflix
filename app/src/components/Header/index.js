/* eslint-disable prettier/prettier */
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import styles from './styles';

const Header = () => {
  return (
    <>
      <LinearGradient
        style={styles.header}
        colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0)']}
      >
      <View style={styles.headerSafeAreaView}>
        <Image source={require('../../assets/logo-compact.png')}/>
        <TouchableOpacity>
          <Text style={styles.textWhite}>Séries</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.textWhite}>Filmes</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.textWhite}>Minha Lista</Text>
        </TouchableOpacity>
      </View>
      </LinearGradient>
    </>
  );
};

export default Header;
