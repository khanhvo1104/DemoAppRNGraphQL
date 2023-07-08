import React, {FC} from 'react';
import {Input, FormControl} from 'native-base';
import {Controller, FieldErrors} from 'react-hook-form';

interface IFormInput {
  name: string;
  defaultValue?: string;
  isRequired?: boolean;
  isInvalid?: boolean;
  type?: string;
  control: any;
  errors: FieldErrors;
  register: any;
}

const FormInput: FC<IFormInput> = React.forwardRef(
  (
    {
      name,
      defaultValue = '',
      isRequired,
      isInvalid,
      type = 'text',
      control,
      errors,
      register,
    },
    ref,
  ) => {
    return (
      <FormControl isRequired={isRequired} isInvalid={isInvalid}>
        <FormControl.Label>{name}</FormControl.Label>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              onBlur={onBlur}
              placeholder={`Please input ${name}`}
              onChangeText={onChange}
              value={value}
            />
          )}
          name={name}
          {...register}
          ref={ref}
          defaultValue={defaultValue}
          type={type}
        />
        <FormControl.ErrorMessage>{errors.message}</FormControl.ErrorMessage>
      </FormControl>
    );
  },
);
export default FormInput;
