import React, {Component} from 'react';

import {
  errorPageClass,
  errorTextClass,
  errorCodeClass,
} from './_error.scss';

class Error extends Component {
  static getInitialProps({res, err}) {
    const errRes = res || err;
    const statusCode = errRes.statusCode || null;
    return {statusCode};
  }

  render() {
    const {statusCode} = this.props;
    return (
      <p className={errorPageClass}>
        <span className={errorCodeClass}>404</span>
        <span className={errorTextClass}>{statusCode ? `An error ${statusCode} occurred on this server` : 'Sorry, page not found'}</span>
      </p>
    );
  }
}

export default Error;
