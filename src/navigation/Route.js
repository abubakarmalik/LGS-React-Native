import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Student from '../studentHome/Index';
import signIn from '../Auth';

const Stack = createNativeStackNavigator();
const Route = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="signIn"
            component={signIn}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Student"
            component={Student}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Route;
