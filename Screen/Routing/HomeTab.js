import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Profile from '../HomeScreen/Profile';
import All from '../HomeScreen/Home/All';
import Movies from '../HomeScreen/Home/Movies';
import Stream from '../HomeScreen/Home/Stream';
import Events from '../HomeScreen/Home/Events';

const Tab = createMaterialTopTabNavigator();

function HomeTab() {
  return (
    <Tab.Navigator style={{display:' flex',}}>
      <Tab.Screen name="All" component={All} />
      <Tab.Screen name="Movies" component={Movies} />
      <Tab.Screen name="Stream" component={Stream} />
      <Tab.Screen name="Events" component={Events} />
    </Tab.Navigator>
  );
}

export default HomeTab;