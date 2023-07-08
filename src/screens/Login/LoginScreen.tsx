import {VStack, Button} from 'native-base';
import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import FormInput from '../../components/FormInput';
import {yupResolver} from '@hookform/resolvers/yup';
import {LoginSchema} from '../../helpers/ValidateSchema';
import {useMutation, useQuery} from '@apollo/client';
import {LoginQuery} from '../../apollo/login/LoginQueries';
import AsyncStorage from '@react-native-community/async-storage';
import { useSetRecoilState } from 'recoil';
import { authenState } from '../../state/atoms/AuthenAtom';

const LoginScreen = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const [btnLoading, setBtnLoading] = useState(false);
  const [login, {loading, data, error}] = useMutation(LoginQuery);
  const setTodoList = useSetRecoilState(authenState);

  useEffect(() => {
    if (loading) {
      setBtnLoading(true);
    } else {
      setTimeout(() => {
        setBtnLoading(false);
      }, 1000);
    }
  }, [loading]);

  useEffect(() => {
    if (data) {
      AsyncStorage.setItem('accessToken', data.login.accessToken);
    }
  }, [data]);

  const onSubmit = (data: any) => {
    setTodoList(true);
    // console.log('submitting with ', data);
    // login({
    //   variables: {input: {username: data.firstName, password: data.password}},
    // });
  };

  return (
    <VStack
      space={4}
      flex={1}
      marginX={16}
      alignItems="center"
      justifyContent="center">
      <FormInput
        name="FirstName"
        isRequired
        isInvalid={'firstName' in errors}
        control={control}
        errors={errors}
        register={register('firstName')}
      />
      <FormInput
        name="Password"
        isRequired
        isInvalid={'password' in errors}
        control={control}
        errors={errors}
        register={register('password')}
      />
      <Button
        onPress={handleSubmit(onSubmit)}
        colorScheme="pink"
        isLoading={btnLoading}>
        Submit
      </Button>
    </VStack>
  );
};
export default LoginScreen;
