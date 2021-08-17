/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#000',
    flex: 1,
  },
  hero:{
    width: '100%',
    height: 270,
  },
  titleFilm:{
    color: '#FFF',
    marginLeft: 20,
    marginTop: 8,
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonPlay:{
    margin: 20,
    height: 40,
    justifyContent: 'center',
  },
  description:{
    color: '#FFF',
    marginTop: 0,
    margin: 20,
    textAlign: 'justify',
  },
  viewTitles:{
    marginLeft: 20,
    marginRight: 20,
  },
  titleText:{
    fontSize: 12,
    color: '#FFF',
  },
  viewIcon:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  buttonLeft:{
    top: 10,
  },
});

export default styles;
