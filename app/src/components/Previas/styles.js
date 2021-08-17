/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  flatListContainer:{
    width: '100%',
    height: 100,
    marginTop: 10,
    marginBottom: 20,
  },
  oval:{
    backgroundColor: '#E50914',
    width: 90,
    height: 90,
    padding: 2.5,
    borderRadius: 90,
  },
  capa:{
    width: 85,
    height: 85,
    borderRadius: 85,
  },
  logo:{
    width: 90,
    height: 45,
    position: 'absolute',
    zIndex: 10,
    bottom: 10,
    alignSelf: 'center',
  },
  gradient:{
    width: '100%',
    height: 60,
    position: 'absolute',
    zIndex: 9,
    bottom: 0,
  },
});

export default styles;
