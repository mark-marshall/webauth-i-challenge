import React, { Component } from 'react';
import axios from 'axios';

import Register from './Register';
import Login from './Login';
import Users from './Users';

class App extends Component {
  state = {
    user: {
      username: '',
      password: '',
    },
    login: {
      username: '',
      password: '',
    },
    users: [],
  };

  componentDidMount() {
    if (localStorage.getItem('auth')) {
      axios
        .get('http://localhost:4000/api/users')
        .then(users => this.setUsers(users.data))
        .catch(err => console.log(err));
    }
  }

  setUsers = users => {
    this.setState({
      users,
    });
  };

  resetEntry = () => {
    this.setState({
      user: {
        username: '',
        password: '',
      },
    });
  };

  resetLogin = () => {
    this.setState({
      login: {
        username: '',
        password: '',
      },
    });
  };

  onChangeEntry = event => {
    this.setState({
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value,
      },
    });
  };

  onChangeLogin = event => {
    this.setState({
      login: {
        ...this.state.login,
        [event.target.name]: event.target.value,
      },
    });
  };

  registerUser = user => {
    axios
      .post('http://localhost:4000/api/register', user)
      .then(localStorage.setItem('auth', true))
      .then(this.resetEntry())
      .catch(err => console.log(err));
  };

  loginUser = user => {
    axios
      .post('http://localhost:4000/api/login', user)
      .then(localStorage.setItem('auth', true))
      .then(this.resetLogin())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Register
          user={this.state.user}
          changeHandler={this.onChangeEntry}
          registerUser={this.registerUser}
        />
        <Login
          user={this.state.login}
          changeHandler={this.onChangeLogin}
          loginUser={this.loginUser}
        />
        <Users users={this.state.users}/>
      </div>
    );
  }
}

export default App;
