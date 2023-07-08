import * as React from 'react';
import { useRecoilValue } from 'recoil';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../screens/Login/LoginScreen';
import { authenState } from '../state/atoms/AuthenAtom';

const Stack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
  const isLoggedIn = useRecoilValue(authenState);
  
  return (
    <AuthStack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
