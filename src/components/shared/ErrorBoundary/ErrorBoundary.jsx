import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-10 text-red-500 bg-red-100 rounded-lg m-5">
          <h1 className="text-2xl font-bold mb-4">Something went wrong.</h1>
          <p className="font-mono text-sm break-words bg-white p-4 rounded shadow">
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
