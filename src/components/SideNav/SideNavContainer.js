import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SideNav from './SideNav';
import { getTelemetryData } from '../../actions';

class SideNavContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { start: null, end: null };
    }

    handleStartChange = event => {
        this.setState({ start: event.target.value });
    };

    handleEndChange = event => {
        this.setState({ end: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        const { start, end } = this.state;
        this.props.getTelemetryData(start, end);
    };

    render() {
        return (
            <SideNav
                handleSubmit={this.handleSubmit}
                handleEndChange={this.handleEndChange}
                handleStartChange={this.handleStartChange}
            />
        );
    }
}

SideNavContainer.propTypes = {
    getTelemetryData: PropTypes.func.isRequired,
};

export default connect(
    null,
    { getTelemetryData },
)(SideNavContainer);
