/* eslint-disable react/destructuring-assignment */
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';

class Error extends Component {
  render() {
    return (
      <div className='error'>
        <span className='error-message'>{`Error: ${this.props.errorMessage}`}</span>
      </div>
    );
  }
}

export default Error;
