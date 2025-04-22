import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return <h2>Щось пішло не так 😢</h2>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
