import React, { Component } from 'react';
import User from '../user';
import Swiper from '../swiper';

import { users } from '../../data/users';
import './styles.scss';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          showSwiper: false,
          id: null
      };

      this.closeSwiper = this.closeSwiper.bind(this);
  }

  swiperDataFromUsers() {
    return users.map((user) => ({
      id: user.id,
      header: user.role,
      mainText: user.name
    }))
  }

  selectUser(id) {
    this.setState({
      id,
      showSwiper: true,
    })
  }

  closeSwiper() {
    this.setState({ showSwiper: false })
  }

  render() {
    return (
      <section className="app">
        { this.state.showSwiper &&
          <Swiper data={this.swiperDataFromUsers()} id={this.state.id} close={this.closeSwiper} />
        }
        <h1>Meet our team</h1>
        <div className="wrapper">
          { users.map(user => <User key={user.id} user={user} selectUser={(id) => this.selectUser(id)} />) }
        </div>
      </section>
    );
  }
}

export default App;
