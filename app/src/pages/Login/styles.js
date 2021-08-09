/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bgDark: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  logo:{
    display: 'flex',
    alignSelf: 'center',
    marginBottom: 80,
  },
  marginBottom:{
    marginBottom: 20,
  },
  marginTop:{
    marginTop: 20,
    marginBottom: 35,
  },
  textSignIt:{
    color: 'rgba(255, 255, 255, 0.6)',
  },
  textSignItNow:{
    color: '#FFF',
    fontSize: 16,
  },
  textSmall:{
    color: 'rgba(255, 255, 255, 0.6)',
    marginTop: 10,
  },
  textAbout:{
    color: '#0071EB',
  },
});

export default styles;
