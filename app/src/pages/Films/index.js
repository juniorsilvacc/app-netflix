/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, ScrollView, ImageBackground, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button, Caption } from 'react-native-paper';

import ButtonVertical from '../../components/ButtonVerticalFilms';
import Session from '../../components/Session';
import SessionSerie from '../../components/SessionSerie';

import styles from './styles';

const Films = () => {

  const [type] = useState('serie');

  return (
    <>
      <ScrollView style={styles.container}>
        <View>
          <ImageBackground
            style={styles.hero}
            source={{uri: 'https://i.imgur.com/M4NVavf.jpg'}}
          >

          <TouchableOpacity style={styles.buttonLeft}>
            <Icon name="chevron-left" color="#000" size={50} />
          </TouchableOpacity>

          </ImageBackground>

          <Text style={styles.titleFilm}>Até o Último Homem</Text>

          <Button
            style={styles.buttonPlay}
            mode="contained"
            icon="play"
            color="#fff"
            uppercase={false}
            onPress={() => console.log('Pressed')}
          >
            Assistir
          </Button>

          <Text style={styles.description}>
          Acompanhe a história de Desmond T. Doss, um médico do exército americano que, durante a Segunda Guerra Mundial, se recusa a pegar em armas. Durante a Batalha de Okinawa ele trabalha na ala médica e salva cerca de 75 homens.
          </Text>

          <View style={styles.viewTitles}>
            <Caption style={{lineHeight: 14}}>
              Elenco <Caption style={styles.titleText}>Vince Vaughn, Like Pegler, Firass Dirani</Caption>{' '}
              Gêneros <Caption style={styles.titleText}>Filmes baseados na vida real, Dramas, Dramas militares.</Caption>{' '}
              Cenas e momentos <Caption style={styles.titleText}>Violentos, Aqui tudo é possível, Comoventes</Caption>
            </Caption>
          </View>

          <View style={styles.viewIcon}>
            <ButtonVertical icon="plus" text="Minha Lista" />
            <ButtonVertical icon="thumb-up" text="Classifique" />
            <ButtonVertical icon="send" text="Compartilhe" />
            <ButtonVertical icon="download" text="Baixar" />
          </View>


          {type === 'filme' && <Session hasTopBorder/>}
          {type === 'serie' &&
            <SessionSerie/>
          }

        </View>

      </ScrollView>
    </>
  );
};

export default Films;
