import * as yup from 'yup';

export const LoginSchema = yup
  .object({
    firstName: yup.string().required(),
    password: yup.string().required(),
  })
  .required();
