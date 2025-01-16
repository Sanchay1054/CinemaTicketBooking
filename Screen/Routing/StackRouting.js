import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../HomeScreen/Home';
import Profile from '../HomeScreen/Profile';
import styles from '../../Styles/Routing/RoutingStyles'
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

const StackRouting = () => {

  const data = [
    { id: '1', title: 'Item 1', image: 'https://example.com/image1.jpg' },
    { id: '2', title: 'Item 2', image: 'https://example.com/image2.jpg' },
    { id: '3', title: 'Item 3', image: 'https://example.com/image3.jpg' },
    { id: '4', title: 'Item 4', image: 'https://example.com/image4.jpg' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.title}</Text>
      <Image
        source={{ uri: item.image }}
        style={styles.image}
      />
    </View>
  );

  
  return (
    <NavigationContainer>
      <View style={styles.body}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Contact Us') {
              iconName = focused ? 'call' : 'call-outline';
            } else if(route.name === 'Notification'){
              iconName = focused ? 'notifications' : 'notifications-outline'
            } else if(route.name === 'Movies'){
              iconName = focused ? 'videocam' : 'videocam-outline'
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          tabBarShowLabel: false,
          tabBarStyle:{
            justifyContent: 'center',
            padding: '5px',
            borderRadius: '20px',
            boxShadow: '0px 0px 2px #000',
            alignSelf: 'center',
            minWidth: '80vw',
            bottom: '10px',
            backgroundColor: '#EEE'
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Tab.Screen name="Notification" component={Home} options={{headerShown: false}}/>
        <Tab.Screen name="Movies" component={Home} options={{headerShown: false}}/>
        <Tab.Screen name="Contact Us" component={Profile} />
      </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
};

export default StackRouting;