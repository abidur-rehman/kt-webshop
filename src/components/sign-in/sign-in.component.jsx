import React from 'react';
import { createStructuredSelector } from 'reselect';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';

import { authUser } from '../../redux/user/user.actions';
import { selectUserErrorMessage } from '../../redux/user/user.selectors';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
  ErrorMessageContainer
} from './sign-in.styles';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    const { email, password } = this.state;
    const { authUser } = this.props;
    authUser(email, password);
  }

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  getMessage = () => {
    const { message } = this.props.error;
    debugger
    if (message) {
      return message;
    }
    return "";
  }
  ;

  render() {
    return (
        <SignInContainer>
          <SignInTitle>I already have an account</SignInTitle>
          <span>Sign in with your email and password</span>

          <form onSubmit={this.handleSubmit}>
            <FormInput
                name='email'
                type='email'
                handleChange={this.handleChange}
                value={this.state.email}
                label='email'
                required
            />
            <FormInput
                name='password'
                type='password'
                value={this.state.password}
                handleChange={this.handleChange}
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
          <ErrorMessageContainer>{this.props.error ? this.props.error.message : ""}</ErrorMessageContainer>
        </SignInContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  error: selectUserErrorMessage
});

const mapDispatchToProps = dispatch => ({
  authUser: (email, password) => dispatch(authUser(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);