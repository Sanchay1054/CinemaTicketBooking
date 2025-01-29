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
    justifyContent: 'space-evenly',
    marginBottom: '20px',
  },
  detail:{
    display: 'flex',
    flexDirection: 'column',
    padding: '5px',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '1vw',
    boxShadow: '0px 0px 5px #555',
    width: 'fit-content',
    borderRadius: '10px',
    maxWidth: '35vw',
    backgroundColor: '#FFF',
  },
  head:{
    fontFamily:'Sans-serif',
    fontSize: '130%',
    fontWeight: '600',
    paddingLeft: '5vw',
    padding: '10px',
  },
  title:{
    fontWeight: '600',
    // fontSize: '100%',
  },
});
