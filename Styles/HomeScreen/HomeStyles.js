// styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'blue',
  },
  body:{
    flex: 1,
    backgroundColor: '#FFF',
  },
  navbar:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0px 0px 2px #AAA',
    flexDirection: 'row',
    padding: '5px',
  },
  dropdownContainer: {
    width: 200, // Fixed width for the dropdown
    height: 200, // Fixed height for the dropdown
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    position: 'absolute',
    top: 80, // Position the dropdown below the button
    zIndex: 100,
    padding: 10,
    elevation: 5, // For shadow on Android
  },
  dropdownList: {
    maxHeight: 150, // Limit the dropdown list size if necessary
  },
  dropdownItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  dropdownItemText: {
    fontSize: 16,
  },
  navbarimg:{
    height: '5vh',
    width: '5vh',
  },
  search:{
    borderRadius: '10px',
    boxShadow: '0px 0px 1px #000',
    padding: '2px',
    fontSize: '110%',
    paddingLeft: '10px'
  },
  searchbar:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  header:{
    display: 'flex',
    // alignItems: 'center',
    justifyContent: 'center',
    padding: '2vw',
    color: '#FFF',
    boxShadow: '0px 5px 10px #AAA',
    backgroundColor: '#00F',
    borderBottomLeftRadius: '20px',
    borderBottomRightRadius: '20px',
  },
  headerText:{
    fontSize: '140%',
    fontWeight: '700',
    color: '#FFF',
  },
  headert:{
    borderLeftColor: '#F00',
    borderLeftWidth: '5px',
    color: '#FFF',
    paddingLeft: '7px',
    fontSize: '110%',
    marginTop: '10px',
    padding: '5px',
    marginBottom: '20px',
    fontFamily: 'Arial',
    fontStyle: 'italic',
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: 'lightgray',
    padding: 10,
  },
  itemText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  slide:{
    display: 'flex',
    flexDirection: 'row',
    paddingTop: '10px',
    paddingBottom: '10px',
    marginTop: '10px',
    marginBottom: '10px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  show:{
    display: 'flex',
    borderRadius: '10px',
    boxShadow: '0px 0px 5px #AAA',
    margin: '5px',
    padding: '5px',
    width: '90vw',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(248, 230, 230)',
  },
  head:{
    fontFamily:'Sans-serif',
    fontSize: '130%',
    fontWeight: '600',
    paddingLeft: '5vw',
  },
  content:{
    display: 'flex',
    padding: '5px',
    flexWrap: 'wrap'
  }
});
