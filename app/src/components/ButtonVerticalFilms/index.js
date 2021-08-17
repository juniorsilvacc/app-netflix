/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

const ButtonVerticalHero = ({icon, text}) => {
  return (
    <>
      <TouchableOpacity style={styles.button}>
        <Icon name={icon} color="#FFF" size={30} />
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </>
  );
};

export default ButtonVerticalHero;
