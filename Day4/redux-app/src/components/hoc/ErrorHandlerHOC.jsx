import { Component } from "react"

const ErrorHandlerHOC = (InputComponent) => class extends Component {
    static get displayName() {
        return "ErrorHandlerHOC";
    }

    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            var cError = require('../../assets/component-error.png');
            return (
                <div className="text-center">
                    <img src={cError} alt="Component Loading Error" className="rounded" />
                </div>
            );
        } else
            return <InputComponent {...this.state} {...this.props} />
    }
}

export default ErrorHandlerHOC;