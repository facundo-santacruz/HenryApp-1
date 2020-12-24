import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { DripsyProvider } from 'dripsy';

//Screens
import Home from './screens/Home';
import Welcome from './screens/Welcome';
import ForgotPassword from './screens/ForgotPassword';
import UsersList from './screens/UsersList'
import CohorteList from './screens/CohorteList'
import Profile from './screens/Profile';
import ProfileEdit from './screens/ProfileEdit';
import StandUp from './screens/StandUp';
import IniciaryRegistrar from './screens/PruebaBoton';
import SalaDeMesa from './screens/SalaDeMesa';
import PairProgramming from './screens/PairProgramming';

const Stack = createStackNavigator();

const client = new ApolloClient({
  uri: `http://localhost:5000/graphql`,
  cache: new InMemoryCache(),
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors)
    console.log('networkError', networkError)
  }//debugging graphql
});

export default function App() {

  return (
    <ApolloProvider client={client}>
      <DripsyProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: true }}>
            <Stack.Screen name="CohorteList" component={CohorteList} />
            <Stack.Screen name="UsersList" component={UsersList} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="PruebaBoton" component={IniciaryRegistrar} />
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
            <Stack.Screen name="SalaDeMesa" component={SalaDeMesa} />
            <Stack.Screen name="PairProgramming" component={PairProgramming} />
            <Stack.Screen name="StandUp" component={StandUp} />
          </Stack.Navigator>
        </NavigationContainer>
      </DripsyProvider>
    </ApolloProvider>
  );
}

const theme = {
  colors: {
    primary: 'yellow'
  },

}