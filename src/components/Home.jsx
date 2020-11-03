import React, { Component } from 'react';

class Home extends Component {
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
      <>
        <h2>Home Page </h2>
        <ul>
        {this.state.users.map(user => 
          <li key={user.id}>{user.firstName} {user.lastName}</li>
        )}
        </ul>
      </>
    );
  }
}

export default Home;