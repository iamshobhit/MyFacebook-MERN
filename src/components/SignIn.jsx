import React, { Component } from 'react';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch('/sign')
      .then(res => res.json())
      .then(users => this.setState({users}));
  }

  render() {
    return (
      <>
        <h2>SignIn Page </h2>
        <ul>
        {this.state.users.map(user => 
          <li key={user._id}>{user.email} {user.password}</li>
        )}
        </ul>
      </>
    );
  }
}

export default SignIn;
