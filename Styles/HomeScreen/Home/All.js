// styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  body:{
    flex: 1,
    backgroundColor: '#FFF',
  },
  content:{
    display: 'flex',
    padding: '5px',
    flexWrap: 'wrap',
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'flex-start'
  },
  detail:{
    display: 'flex',
    flexDirection: 'column',
    padding: '5px',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '5px',
    boxShadow: '0px 0px 5px #555',
    width: 'fit-content',
    borderRadius: '10px',
  }
});
