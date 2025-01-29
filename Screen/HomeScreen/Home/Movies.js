import {View, Text, Image} from 'react-native';
import styles from '../../../Styles/HomeScreen/Home/All';
import {useState} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Movies = ({ navigation }) => {

    const movies = [{url:'https://m.media-amazon.com/images/I/71h9DTSjRlL._AC_UF1000,1000_QL80_.jpg', title:'Enthiran'},{url:'https://m.media-amazon.com/images/M/MV5BNWMwODYyMjQtMTczMi00NTQ1LWFkYjItMGJhMWRkY2E3NDAyXkEyXkFqcGc@._V1_.jpg', title:'RRR'},
        {url:'https://m.media-amazon.com/images/I/71h9DTSjRlL._AC_UF1000,1000_QL80_.jpg', title:'Enthiran'},{url:'https://m.media-amazon.com/images/M/MV5BNWMwODYyMjQtMTczMi00NTQ1LWFkYjItMGJhMWRkY2E3NDAyXkEyXkFqcGc@._V1_.jpg', title:'RRR'},
        {url:'https://m.media-amazon.com/images/I/71h9DTSjRlL._AC_UF1000,1000_QL80_.jpg', title:'Enthiran'},{url:'https://m.media-amazon.com/images/M/MV5BNWMwODYyMjQtMTczMi00NTQ1LWFkYjItMGJhMWRkY2E3NDAyXkEyXkFqcGc@._V1_.jpg', title:'RRR'}
    ]

    const renderItem = () => {
            return(
                movies.map((m,i)=>(
                <View key={i} style={styles.detail}>
                    <Image source={{uri:m.url}} style={{height: '30vw', width: '25vw', maxHeight: '300px', maxWidth: '250px'}} alt={m.title}/>
                        <Text style={styles.title}>{m.title}</Text>
                        <Text style={styles.title}><Ionicons name="star" size={(15,15)} color={'gold'}/>10/10</Text>
                </View>
                ))
            )
        }

    return(
        <>
        <View>
            <Text style={styles.head}>Movies</Text>
            <View style={styles.content}>
                {renderItem()}
            </View>
        </View>
        </>
    )
}

export default Movies;