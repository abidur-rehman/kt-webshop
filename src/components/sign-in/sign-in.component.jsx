import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { authUser } from '../../redux/user/user.actions';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
  ErrorMessageContainer
} from './sign-in.styles';

const SignIn = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const error = useSelector(state => state.user.loginError);
  const dispatch = useDispatch();

  const { email, password } = credentials;

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(authUser(email, password));
  }

  const handleChange = event => {
    const { value, name } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput
              name='email'
              type='email'
              handleChange={handleChange}
              value={email}
              label='email'
              required
          />
          <FormInput
              name='password'
              type='password'
              value={password}
              handleChange={handleChange}
              label='password'
              required
          />
          <ButtonsBarContainer>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton isGoogleSignIn>
              Google Sign in
            </CustomButton>
          </ButtonsBarContainer>
        </form>
        <ErrorMessageContainer>{error ? error.message : ""}</ErrorMessageContainer>
      </SignInContainer>
  );
}

export default SignIn;