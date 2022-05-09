import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { useSelector } from 'react-redux';

// screens
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp'


const Stack = createNativeStackNavigator();

export default function AppRouter() {
  const isLoggedIn = useSelector((state) => !state.user.token ? true : false)


  return (

    <NavigationContainer>
    {isLoggedIn 
        ?
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>

        :
        <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name='SignUp' component={SignUp} />
        </Stack.Navigator>

    }
    </NavigationContainer>
  );
}


