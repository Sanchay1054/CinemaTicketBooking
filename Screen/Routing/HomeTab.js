import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Profile from '../HomeScreen/Profile';
import All from '../HomeScreen/Home/All';

const Tab = createMaterialTopTabNavigator();

function HomeTab() {
  return (
    <Tab.Navigator style={{display:' flex',}}>
      <Tab.Screen name="All" component={All} />
      <Tab.Screen name="Movies" component={Profile} />
      <Tab.Screen name="Stream" component={Profile} />
      <Tab.Screen name="Events" component={Profile} />
    </Tab.Navigator>
  );
}

export default HomeTab;