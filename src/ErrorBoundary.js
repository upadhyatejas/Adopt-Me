import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    redirect: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true, redirect: false };
  }

  componentDidCatch(error, info) {
    setTimeout(() => {
      this.setState({ redirect: true });
    }, 5000);
    console.log({ error });
    console.log({ info });
    // log to sentry, azure monitor, New Relic, TrackJS etc
  }

  render() {
    const { hasError } = this.state;
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (hasError) {
      return (
        <div>
          <h1>
            This listing has an error <Link to="/">Click here</Link> to go back
            to home page or wait 5 seconds.
          </h1>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
