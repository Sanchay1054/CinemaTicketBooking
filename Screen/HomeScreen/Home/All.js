import {View, Text, Image, ScrollView} from 'react-native';
import styles from '../../../Styles/HomeScreen/Home/All';
import Ionicons from 'react-native-vector-icons/Ionicons';

const All = ({ navigation }) => {

    const data = [{url:'https://m.media-amazon.com/images/I/71h9DTSjRlL._AC_UF1000,1000_QL80_.jpg', title:'Enthiran'},{url:'https://m.media-amazon.com/images/M/MV5BNWMwODYyMjQtMTczMi00NTQ1LWFkYjItMGJhMWRkY2E3NDAyXkEyXkFqcGc@._V1_.jpg', title:'RRR'},
        {url:'https://m.media-amazon.com/images/I/71h9DTSjRlL._AC_UF1000,1000_QL80_.jpg', title:'Enthiran'},{url:'https://m.media-amazon.com/images/M/MV5BNWMwODYyMjQtMTczMi00NTQ1LWFkYjItMGJhMWRkY2E3NDAyXkEyXkFqcGc@._V1_.jpg', title:'RRR'},
        {url:'https://m.media-amazon.com/images/I/71h9DTSjRlL._AC_UF1000,1000_QL80_.jpg', title:'Enthiran'},{url:'https://m.media-amazon.com/images/M/MV5BNWMwODYyMjQtMTczMi00NTQ1LWFkYjItMGJhMWRkY2E3NDAyXkEyXkFqcGc@._V1_.jpg', title:'RRR'}
    ]

    const stream = [{url:'https://cdn.123telugu.com/content/wp-content/uploads/2024/07/indian2-3.jpg', title:'INDIAN 2'},{url:'https://m.media-amazon.com/images/M/MV5BYjJiNGM2MzYtMjU5Mi00NzYxLWJiN2QtYTY5ZTBjYWIzMzIwXkEyXkFqcGc@._V1_.jpg', title:'Madha Gaja Raja'},
        {url:'https://cdn.123telugu.com/content/wp-content/uploads/2024/07/indian2-3.jpg', title:'INDIAN 2'},{url:'https://m.media-amazon.com/images/M/MV5BYjJiNGM2MzYtMjU5Mi00NzYxLWJiN2QtYTY5ZTBjYWIzMzIwXkEyXkFqcGc@._V1_.jpg', title:'Madha Gaja Raja'},
        {url:'https://cdn.123telugu.com/content/wp-content/uploads/2024/07/indian2-3.jpg', title:'INDIAN 2'},{url:'https://m.media-amazon.com/images/M/MV5BYjJiNGM2MzYtMjU5Mi00NzYxLWJiN2QtYTY5ZTBjYWIzMzIwXkEyXkFqcGc@._V1_.jpg', title:'Madha Gaja Raja'}
    ]

    const events = [{url:'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/csk-vs-rcb-ipl-match-poster-template-design-4e0fe1e236ce92d5f6739d8501c92853_screen.jpg?ts=1710543716', title:'CSK vs RCB'},{url:'https://i.pinimg.com/736x/20/8d/99/208d994a82d529a3c016c6d67bac3112.jpg', title:'RR vs DC'},
        {url:'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/csk-vs-rcb-ipl-match-poster-template-design-4e0fe1e236ce92d5f6739d8501c92853_screen.jpg?ts=1710543716', title:'CSK vs RCB'},{url:'https://i.pinimg.com/736x/20/8d/99/208d994a82d529a3c016c6d67bac3112.jpg', title:'RR vs DC'},
        {url:'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/csk-vs-rcb-ipl-match-poster-template-design-4e0fe1e236ce92d5f6739d8501c92853_screen.jpg?ts=1710543716', title:'CSK vs RCB'},{url:'https://i.pinimg.com/736x/20/8d/99/208d994a82d529a3c016c6d67bac3112.jpg', title:'RR vs DC'},
    ]

    const renderItem = (data) => {
        return(
            data.map((m,i)=>(
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
        <ScrollView style={{height: '85vh'}}>
            <Text style={styles.head}>Trending Movies</Text>
            <View style={styles.content}>
                {renderItem(data)}
            </View>
            <Text style={styles.head}>Trending Streams</Text>
            <View style={styles.content}>
                {renderItem(stream)}
            </View>
            <Text style={styles.head}>Trending Events</Text>
            <View style={styles.content}>
                {renderItem(events)}
            </View>
        </ScrollView>
        </>
    )
}

export default All;