/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  hero:{
    height: 400,
    width: '100%',
  },
  logo:{
    marginTop: 200,
    alignSelf: 'center',
    width: 300,
    height: 150,
    position: 'absolute',
    zIndex: 10,
  },
  containertop10:{
    position: 'absolute',
    zIndex: 10,
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  badgetop10:{
    width: 20,
    height: 20,
    marginRight: 10,
  },
  top10Text:{
    color: '#FFF',
    fontSize: 15,
  },
  gradient:{
    width: '100%',
    height: 150,
    position: 'absolute',
    zIndex: 9,
    bottom: 0,
  },
});

export default styles;
