import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signUpUser } from '../../redux/user/user.actions';

import { SignUpContainer, SignUpTitle, ErrorMessageContainer } from './sign-up.styles';

const SignUp = () => {
  const [fields, setFields] = useState({ displayName: '', email: '', password: '', confirmPassword: '' });
  const error = useSelector(state => state.user.signUpError);
  const dispatch = useDispatch();
  const { displayName, email, password, confirmPassword } = fields;

  const handleSubmit = event => {
    event.preventDefault();

    if (password !== confirmPassword) {
        alert("passwords don't match");
      return;
    }
    dispatch(signUpUser(displayName, email, password));
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  return (
      <SignUpContainer>
        <SignUpTitle>I do not have a account</SignUpTitle>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={handleSubmit}>
          <FormInput
              type='text'
              name='displayName'
              value={displayName}
              onChange={handleChange}
              label='Display Name'
              required
          />
          <FormInput
              type='email'
              name='email'
              value={email}
              onChange={handleChange}
              label='Email'
              required
          />
          <FormInput
              type='password'
              name='password'
              value={password}
              onChange={handleChange}
              label='Password'
              required
          />
          <FormInput
              type='password'
              name='confirmPassword'
              value={confirmPassword}
              onChange={handleChange}
              label='Confirm Password'
              required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
        <ErrorMessageContainer>{error ? error.message : ''}</ErrorMessageContainer>
      </SignUpContainer>
  );
}

export default SignUp;
