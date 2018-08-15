import React, { Component } from 'react';

import './styles.scss';

class Swiper extends Component {
  constructor(props) {
      super(props);
      this.state = {
          id: null,
          blurFadeIn: false,
          blurFadeOut: false,
      };

      this.nextItem = this.nextItem.bind(this);
      this.prevItem = this.prevItem.bind(this);
      this.onClose = this.onClose.bind(this);
      this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    this.setState({ id: this.props.id, blurFadeIn: true });
    this.handleKeyDown();
  }

  handleKeyDown() {
    document.onkeyup = (e) => {
      switch (true) {
        case (e.which === 39):
          this.nextItem();
          break;
        case (e.which === 37):
          this.prevItem();
          break;
        case (e.which === 27):
          this.onClose();
          break;
        default:
          break;
      }
    }
  }

  nextItem() {
    if(this.state.id === this.props.data[this.props.data.length - 1].id) {
      this.setState({ id: this.props.data[0].id});
      return;
    }
    this.setState({ id: this.state.id + 1});
    return;
  }

  prevItem() {
    if(this.state.id === this.props.data[0].id) {
      this.setState({ id: this.props.data[this.props.data.length - 1].id});
      return;
    }
    this.setState({ id: this.state.id - 1});
    return;
  }

  onClose() {
    this.setState({ blurFadeOut: true });
    setTimeout(() => this.props.close(), 200);
  }

  render() {
    return (
      <div className={
        `swiper ${this.state.blurFadeIn && "blurFadeIn"} ${this.state.blurFadeOut && "blurFadeOut"}`
      }>
        <button className="close" onClick={this.onClose}><i></i></button>
        <button className="prev" onClick={this.prevItem}><i></i></button>
        <div className="box">
          <span
            className="header"
          >
            {this.state.id && this.props.data.find(item => item.id === this.state.id).header}
          </span>
          <span
            className="main-text"
            onAnimationEnd={this.removeAnim}
          >
            {this.state.id && this.props.data.find(item => item.id === this.state.id).mainText}
          </span>
        </div>
        <button className="next" onClick={this.nextItem}><i></i></button>
      </div>
    );
  }
}

export default Swiper;
