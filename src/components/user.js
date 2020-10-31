import React, { Component } from 'react';

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch('/api')
      .then(res => res.json())
      .then(users => this.setState({users}));
  }

  render() {
    return (
      <div>
        <h2>Users Profile with </h2>
        <ul>
        {this.state.users.map(user => 
          <li key={user.id}>{user.firstName} {user.lastName}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default Users;