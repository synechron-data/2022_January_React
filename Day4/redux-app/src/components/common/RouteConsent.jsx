import React, { Component } from 'react';
import { Prompt, withRouter } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

class RouteConsent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            nextLocation: null,
            confirmedNavigation: false
        };
        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleBlockedNavigation = this.handleBlockedNavigation.bind(this);
        this.handleConfirmNavigationClick = this.handleConfirmNavigationClick.bind(this);
    }

    showModal(location) {
        this.setState({ modalVisible: true, nextLocation: location });
    }

    closeModal(callback = () => { }) {
        this.setState({ modalVisible: false }, callback);
    }

    handleBlockedNavigation(nextLocation) {
        const { confirmedNavigation } = this.state;
        const currentLocation = this.props.match.path;
        if ((!confirmedNavigation) && (currentLocation !== nextLocation.pathname)) {
            this.showModal(nextLocation);
            return false;
        }

        return true;
    }

    handleConfirmNavigationClick() {
        this.closeModal(() => {
            const { history } = this.props;
            const { nextLocation } = this.state;

            if (nextLocation) {
                this.setState({ confirmedNavigation: true }, () => {
                    history.push(nextLocation.pathname);
                });
            }
        });
    }

    render() {
        const { when } = this.props;
        const { modalVisible, nextLocation } = this.state;

        if (nextLocation) {
            var path = nextLocation.pathname;
        }

        return (
            <>
                <Prompt when={when} message={this.handleBlockedNavigation} />
                <Modal show={modalVisible}>
                    <Modal.Header>
                        <Modal.Title>Confirm Navigation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {
                            this.props.message ? this.props.message :
                                `Are you sure, you want to navigate to ${path || ''}`
                        }
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.closeModal()}>
                            No
                        </Button>
                        <Button variant="primary" onClick={this.handleConfirmNavigationClick}>
                            Yes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default withRouter(RouteConsent);