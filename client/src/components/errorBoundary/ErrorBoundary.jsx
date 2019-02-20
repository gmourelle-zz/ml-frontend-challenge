import React from 'react';

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

export default ErrorBoundary;
