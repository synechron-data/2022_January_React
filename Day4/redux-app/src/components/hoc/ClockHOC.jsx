import { Component } from "react"

const ClockHOC = (InputComponent) => class extends Component {
    static get displayName() {
        return "ClockHOC";
    }

    constructor(props) {
        super(props);
        this.state = { currentTime: new Date().toLocaleTimeString() };
    }

    componentDidMount() {
        this.clock_interval = setInterval(() => {
            this.setState({ currentTime: new Date().toLocaleTimeString() });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clock_interval);
    }

    render() {
        return (
            <>
                <div className="fs-4 text-end text-primary">
                    {this.state.currentTime}
                </div>
                <InputComponent {...this.props} />
            </>
        );
    }
}

export default ClockHOC;