import React from 'react';
import PropTypes from 'prop-types';

import './ErrorBoundary.scss';
export class ErrorBoundary extends React.Component {
  componentDidCatch(error, info) {
    console.warn(error, info);
  }

  render() {
    const { error, children, message } = this.props;

    if (error) {
      return <h2 className="error-message-container">{message}</h2>;
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
