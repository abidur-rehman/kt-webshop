import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signup } from '../../api/restApi';
import { setCurrentUser } from '../../redux/user/user.actions';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';


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

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    const { setCurrentUser } = this.props;

    if (password !== confirmPassword) {
        alert("passwords don't match");
      return;
    }

    try {
      const result = await signup(
        displayName,
        email,
        password
      );

      if (result && result.data && result.data.token) {
        let user = {
          username: displayName,
          email,
          token: result.data.token
        }
        setCurrentUser(user);
      }

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });


    } catch (error) {
      console.error(error);
    }
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
        </SignUpContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(SignUp);
