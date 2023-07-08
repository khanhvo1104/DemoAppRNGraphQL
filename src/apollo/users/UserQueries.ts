import {gql} from '@apollo/client';

export const UserQuery = gql(`
  query Users($where: UserWhereInput, $take: Int, $skip: Int) {
    users(where: $where, take: $take, skip: $skip) {
      id
      name
      email
      company {
        name
        id
      }
    }
  }
`);
