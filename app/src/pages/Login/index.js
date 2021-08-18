/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Image, Text} from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import styles from './styles';

const Login = ({navigation}) => {

  const [credenciais, setCredenciais] = useState({
    email: '',
    password: '',
  });


  return (
    <>
      <View style={styles.bgDark}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />

        <TextInput
          label="Email ou número de telefone"
          mode="flat"
          style={styles.marginBottom}
          value={credenciais.email}
          onChangeText={text => setCredenciais({...credenciais, email: 'text'})}
        />

        <TextInput
          label="Senha"
          mode="flat"
          style={styles.marginBottom}
          secureTextEntry
          value={credenciais.password}
          onChangeText={text => setCredenciais({...credenciais, password: 'password'})}
        />

        <Button
          mode="contained"
          onPress={() => {
            navigation.navigate('Home');
          }}
        >
          Entrar
        </Button>

        <Button
          style={[styles.marginBottom, styles.marginTop]}
          onPress={() => console.log('Pressed')}
          theme={{colors: {primary: '#FFF'}}}
        >
          Recuperar senha
        </Button>

        <Text style={styles.textSignIt}>Novo por aqui? <Text style={styles.textSignItNow}>Assine agora.</Text></Text>

        <Text style={styles.textSmall}>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô.<Text style={styles.textAbout}> Saiba mais.</Text></Text>

      </View>
    </>
  );
};

export default Login;

