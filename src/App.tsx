/**
 * DMS Project
 * FinViet Company
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  StyleSheet,
} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ApolloProvider} from '@apollo/client';
import {
  RecoilRoot,
} from 'recoil';

import RootNavigation from './navigation/RootNavigation';
import Client from './apollo/client';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.container]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ApolloProvider client={Client}>
        <RecoilRoot>
          <NativeBaseProvider>
            <RootNavigation />
          </NativeBaseProvider>
        </RecoilRoot>
      </ApolloProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
