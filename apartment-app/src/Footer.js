import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div>
        <h6>Happy {this.props.name}</h6>
      </div>
    );
  }
}

export default Footer;
