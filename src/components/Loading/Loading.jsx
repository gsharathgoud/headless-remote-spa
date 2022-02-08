// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import loadingIcon from '../../images/icon-loading.svg';

const { REACT_APP_PUBLIC_URI } = process.env;

class Loading extends Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div className='loading'>
        <img src={`${REACT_APP_PUBLIC_URI}/${loadingIcon}`} alt='Loading...' />
      </div>
    );
  }
}

export default Loading;
