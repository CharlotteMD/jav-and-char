import React from 'react';
import Axios from 'axios';

import LoginForm from './LoginForm';
import Auth from '../../lib/Auth';

class Login extends React.Component {

  state = {
    user: {
      email: '',
      password: ''
    }
  };

  handleChange = ({ target: { name, value } }) => {
    console.log('working');
    const user = Object.assign({}, this.state.user, { [name]: value });
    const errors = Object.assign({}, this.state.errors, { [name]: '' });
    this.setState({ user, errors });
  }

  handleSubmit = (e) => {
    console.log('hitting');
    e.preventDefault();
    Axios
      .post('/api/login', this.state.user)
      .then(res => {
        // console.log('the response from the api', res);
        Auth.setToken(res.data.token);
        this.props.history.push('/');
      })
      .catch( err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <LoginForm
          user={this.state.user}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

export default Login;
