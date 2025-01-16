import { View, Text, ScrollView, Image, FlatList, SafeAreaView, TextInput, Animated, Dimensions } from "react-native";
import styles from '../../Styles/HomeScreen/HomeStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useState, useRef, useEffect} from 'react';
import HomeTab from "../Routing/HomeTab";

const Home = () => {
    const [search, setSearch] = useState('');
    const [index,setIndex] = useState(0);
    const data = [{url:'https://m.media-amazon.com/images/I/71h9DTSjRlL._AC_UF1000,1000_QL80_.jpg'},{url:'https://m.media-amazon.com/images/M/MV5BNWMwODYyMjQtMTczMi00NTQ1LWFkYjItMGJhMWRkY2E3NDAyXkEyXkFqcGc@._V1_.jpg'}]

  useEffect(() => {

    const interval = setInterval(() => {
        setIndex(index+1);
        }, 3000);
  
      // Cleanup interval on component unmount
      return () => clearInterval(interval);
    
  });

    const renderContent = () => {
        
        return(
            <View style={styles.show}>
                    <Image source={{uri:data[index%data.length].url}} style={{height: '150px', width: '150px'}}/>
            </View>
        )
    }


    return(
        <ScrollView style={styles.body}>
        <View style={styles.navbar}>
            {/* <Text style={styles.text}>Hello This is a Home page</Text> */}
            <Image style={styles.navbarimg} source={require('../../Components/logo.png')}/>
            <SafeAreaView style={styles.searchbar}>
            <TextInput
                placeholder="Search..."
                value={search}
                style={styles.search}
                onChangeText={(text) => setSearch(text)}
            />
            <Ionicons name="search-outline" size={(20,20)}/>
            </SafeAreaView>
            <Ionicons name="person" size={(20,20)}/>


            {/* <View style={styles.dropdownContainer}>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleSelectItem(item)} style={styles.dropdownItem}>
                <Text style={styles.dropdownItemText}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item}
            style={styles.dropdownList}
          />
        </View> */}
            </View>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    BookTicket
                </Text>
                <Text style={styles.headert}>
                    You can book your shows from home, here... This is an App created Unofficially
                </Text>
            </View>
            <View style={styles.slide} >
                {renderContent()}
            </View>

            <View><HomeTab/></View>

            {/* <ScrollView horizontal>
            <View style={styles.show}>
                    <Image source={{uri:data[index%data.length].url}} style={{height: '150px', width: '150px'}}/>
            </View>
            <View style={styles.show}>
                    <Image source={{uri:data[index%data.length].url}} style={{height: '150px', width: '150px'}}/>
            </View>
            </ScrollView> */}

        </ScrollView>
    )
}

export default Home;