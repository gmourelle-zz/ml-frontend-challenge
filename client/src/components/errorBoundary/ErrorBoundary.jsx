import React from 'react';
import PropTypes from 'prop-types';

import './ErrorBoundary.scss';
export class ErrorBoundary extends React.Component {
  // TODO: correctly test this on library update: https://github.com/airbnb/enzyme/issues/1553
  componentDidCatch(error, info) {
    console.warn(error, info);
  }

  render() {
    const { error, children, message } = this.props;

    if (error) {
      return <div className="error-message-container">{message}</div>;
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  raiseError: PropTypes.func,
  children: PropTypes.object
};

export default ErrorBoundary;
