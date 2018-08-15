import React, { Component } from 'react';

import './styles.scss';

class User extends Component {
  render() {
    return (
      <div className="user-box">
        <div className="wrapper">
          <a href={`mailto:${this.props.user.mail}`} className="mail">
            <span></span>
          </a>
          <div className="avatar" onClick={() => this.props.selectUser(this.props.user.id)}>
            <div className="avatar-bg"></div>
            {
              this.props.user.image && <img src={this.props.user.image} alt="avatar" />
            }
          </div>
        </div>
        <span className="name">{this.props.user.name}</span>
        <span className="role">{this.props.user.role}</span>
        <span className="location">{this.props.user.location}</span>
      </div>
    );
  }
}

export default User;
