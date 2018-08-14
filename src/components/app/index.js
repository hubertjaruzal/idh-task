import React, { Component } from 'react';
import User from '../user';

import { users } from '../../data/users';
import './styles.scss';

class App extends Component {
  render() {
    return (
      <section className="app">
        <h1>Meet our team</h1>
        <div className="wrapper">
          { users.map(user => <User key={user.id} user={user} />) }
        </div>
      </section>
    );
  }
}

export default App;
