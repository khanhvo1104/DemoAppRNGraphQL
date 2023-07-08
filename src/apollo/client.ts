import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import AsyncStorage from '@react-native-community/async-storage';

const httpLink = createHttpLink({
  uri: 'http://192.168.69.47:4000',
});

const authLink = setContext(async (_, {headers}) => {
  const token = await AsyncStorage.getItem('accessToken');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const Client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default Client;
