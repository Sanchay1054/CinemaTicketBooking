import {View, Text, Image} from 'react-native';
import styles from '../../../Styles/HomeScreen/Home/All';
import {useState} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stream = ({ navigation }) => {

    const stream = [{url:'https://cdn.123telugu.com/content/wp-content/uploads/2024/07/indian2-3.jpg', title:'INDIAN 2'},{url:'https://m.media-amazon.com/images/M/MV5BYjJiNGM2MzYtMjU5Mi00NzYxLWJiN2QtYTY5ZTBjYWIzMzIwXkEyXkFqcGc@._V1_.jpg', title:'Madha Gaja Raja'},
        {url:'https://cdn.123telugu.com/content/wp-content/uploads/2024/07/indian2-3.jpg', title:'INDIAN 2'},{url:'https://m.media-amazon.com/images/M/MV5BYjJiNGM2MzYtMjU5Mi00NzYxLWJiN2QtYTY5ZTBjYWIzMzIwXkEyXkFqcGc@._V1_.jpg', title:'Madha Gaja Raja'},
        {url:'https://cdn.123telugu.com/content/wp-content/uploads/2024/07/indian2-3.jpg', title:'INDIAN 2'},{url:'https://m.media-amazon.com/images/M/MV5BYjJiNGM2MzYtMjU5Mi00NzYxLWJiN2QtYTY5ZTBjYWIzMzIwXkEyXkFqcGc@._V1_.jpg', title:'Madha Gaja Raja'}
    ]

    const renderItem = () => {
            return(
                stream.map((m,i)=>(
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
            <Text style={styles.head}>Stream</Text>
            <View style={styles.content}>
                {renderItem()}
            </View>
        </View>
        </>
    )
}

export default Stream;