import {View, Text, Image} from 'react-native';
import styles from '../../../Styles/HomeScreen/Home/All';

const All = () => {

    const data = [{url:'https://m.media-amazon.com/images/I/71h9DTSjRlL._AC_UF1000,1000_QL80_.jpg'},{url:'https://m.media-amazon.com/images/M/MV5BNWMwODYyMjQtMTczMi00NTQ1LWFkYjItMGJhMWRkY2E3NDAyXkEyXkFqcGc@._V1_.jpg'},
        {url:'https://m.media-amazon.com/images/I/71h9DTSjRlL._AC_UF1000,1000_QL80_.jpg'},{url:'https://m.media-amazon.com/images/M/MV5BNWMwODYyMjQtMTczMi00NTQ1LWFkYjItMGJhMWRkY2E3NDAyXkEyXkFqcGc@._V1_.jpg'},
        {url:'https://m.media-amazon.com/images/I/71h9DTSjRlL._AC_UF1000,1000_QL80_.jpg'},{url:'https://m.media-amazon.com/images/M/MV5BNWMwODYyMjQtMTczMi00NTQ1LWFkYjItMGJhMWRkY2E3NDAyXkEyXkFqcGc@._V1_.jpg'}
    ]

    const renderItem = () => {
        return(
            data.map((m,i)=>(
            <View key={i} style={styles.detail}>
                <Image source={{uri:m.url}} style={{height: '100px', width: '100px'}}/>
                    <Text>Hello World 123</Text>
            </View>
            ))
        )
    }
    return(
        <>
        <View>
            <View style={styles.content}>
                {renderItem()}
            </View>
        </View>
        </>
    )
}

export default All;