import React from 'react'

export class ErrorHandler extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: error }
    }

    render() {
        if(this.state.hasError) {
            return <p>Hey! Something bad is happening... We will check it!</p>
        }
        return this.props.children;
    }
}