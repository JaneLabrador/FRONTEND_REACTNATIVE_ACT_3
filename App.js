
import * as React from 'react';
import { View, Text } from 'react-native';
import { LinkingContext, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingScreen from './screens/LoginScreen';
import LoginScreen from './screens/LandingScreen';
import SignupScreen from './screens/SignupScreen';
import RecoveryScreen from './screens/RecoveryScreen';
import Home from './screens/Home';








const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
        <Stack.Screen name="LandingScreen" component={LandingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="RecoveryScreen" component={RecoveryScreen} />
        <Stack.Screen name="Home" component={Home} />
        
       

        
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;