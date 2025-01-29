import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StackRouting from "./StackRouting";
import Profile from "../HomeScreen/Profile";

const Routing = () => {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Tabs">
            <Stack.Screen name="Tabs" component={StackRouting} options={{ headerShown: false }} />
            <Stack.Screen name="Hidden" component={Profile} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}

export default Routing;