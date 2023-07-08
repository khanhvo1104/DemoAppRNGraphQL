import {gql} from '@apollo/client';

export const LoginQuery = gql(`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      accessToken
      message
      refreshToken
      status
    }
  }
`);
