import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthNavigator from './AuthNavigator';
import LoggedInNavigator from './LoggedInNavigator';
import { useRecoilValue } from 'recoil';
import { authenState } from '../state/atoms/AuthenAtom';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  const isLoggedIn = useRecoilValue(authenState);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isLoggedIn ? (
          <Stack.Screen name="HomeStack" component={LoggedInNavigator} />
        ) : (
          <Stack.Screen
            name="LoginStack"
            component={AuthNavigator}
            options={{
              animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
