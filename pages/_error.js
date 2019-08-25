import React, {Component} from 'react';

class Error extends Component {
  static getInitialProps({res, err}) {
    const errRes = res || err;
    const statusCode = errRes.statusCode || null;
    return {statusCode};
  }

  render() {
    const {statusCode} = this.props;
    return (
      <p>
        {statusCode ? `An error ${statusCode} occurred on this server` : 'An error occurred on client'}
      </p>
    );
  }
}

export default Error;
