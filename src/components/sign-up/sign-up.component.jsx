import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signUpUser } from '../../redux/user/user.actions';

import { selectUserErrorMessage } from '../../redux/user/user.selectors';
import { SignUpContainer, SignUpTitle, ErrorMessageContainer } from './sign-up.styles';


class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    const { signUpUser } = this.props;

    if (password !== confirmPassword) {
        alert("passwords don't match");
      return;
    }

    signUpUser(displayName, email, password);
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
        <SignUpContainer>
          <SignUpTitle>I do not have a account</SignUpTitle>
          <span>Sign up with your email and password</span>
          <form className='sign-up-form' onSubmit={this.handleSubmit}>
            <FormInput
                type='text'
                name='displayName'
                value={displayName}
                onChange={this.handleChange}
                label='Display Name'
                required
            />
            <FormInput
                type='email'
                name='email'
                value={email}
                onChange={this.handleChange}
                label='Email'
                required
            />
            <FormInput
                type='password'
                name='password'
                value={password}
                onChange={this.handleChange}
                label='Password'
                required
            />
            <FormInput
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                onChange={this.handleChange}
                label='Confirm Password'
                required
            />
            <CustomButton type='submit'>SIGN UP</CustomButton>
          </form>
          <ErrorMessageContainer>{this.props.error ? this.props.error.message : ''}</ErrorMessageContainer>
        </SignUpContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  error: selectUserErrorMessage
});

const mapDispatchToProps = dispatch => ({
  signUpUser: (name, email, password) => dispatch(signUpUser(name, email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
