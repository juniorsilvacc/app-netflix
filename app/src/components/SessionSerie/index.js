/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SinglePickerMaterialDialog } from 'react-native-material-dialog';
import {View, Text, TouchableOpacity} from 'react-native';

import Epsodeo from '../Epsode';

import styles from './styles';

const SessionSerie = () => {

  const [visible, setVisible] = useState(false);
  const [temporada, setTemporada] = useState({value: 1, label: 'Temporada 1'});

  return (
    <>
       <SinglePickerMaterialDialog
        title={'Selecione uma temporada'}
        items={[
          {value: 1, label: 'Temporada 1'},
          {value: 2, label: 'Temporada 2'},
          {value: 3, label: 'Temporada 3'},
        ]}
        visible={visible}
        selectedItem={temporada}
        onCancel={() => ({})}
          onOk={result => {
            setVisible(false);
            setTemporada(result.selectedItem);
          }}
      />
      <View style={styles.viewContainer}>
        <TouchableOpacity
          style={styles.touchbleSerie}
          onPress={() => setVisible(true)}
        >
          <Text style={styles.titleSerie}>{temporada.label}</Text>
          <Icon name="chevron-down" size={30} color="#fff" />
        </TouchableOpacity>

        <Epsodeo />
      </View>
    </>
  );
};

export default SessionSerie;
