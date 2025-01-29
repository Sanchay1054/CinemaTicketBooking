import {View, Text, Image} from 'react-native';
import styles from '../../../Styles/HomeScreen/Home/All';
import {useState} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Events = ({ navigation }) => {

    const events = [{url:'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/csk-vs-rcb-ipl-match-poster-template-design-4e0fe1e236ce92d5f6739d8501c92853_screen.jpg?ts=1710543716', title:'CSK vs RCB'},{url:'https://i.pinimg.com/736x/20/8d/99/208d994a82d529a3c016c6d67bac3112.jpg', title:'RR vs DC'},
        {url:'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/csk-vs-rcb-ipl-match-poster-template-design-4e0fe1e236ce92d5f6739d8501c92853_screen.jpg?ts=1710543716', title:'CSK vs RCB'},{url:'https://i.pinimg.com/736x/20/8d/99/208d994a82d529a3c016c6d67bac3112.jpg', title:'RR vs DC'},
        {url:'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/csk-vs-rcb-ipl-match-poster-template-design-4e0fe1e236ce92d5f6739d8501c92853_screen.jpg?ts=1710543716', title:'CSK vs RCB'},{url:'https://i.pinimg.com/736x/20/8d/99/208d994a82d529a3c016c6d67bac3112.jpg', title:'RR vs DC'},
    ]

    const renderItem = () => {
            return(
                events.map((m,i)=>(
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
            <Text style={styles.head}>Events</Text>
            <View style={styles.content}>
                {renderItem()}
            </View>
        </View>
        </>
    )
}

export default Events;