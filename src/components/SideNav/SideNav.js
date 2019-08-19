import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';

import './SideNav.css';

const SideNav = ({ handleSubmit, handleStartChange, handleEndChange }) => (
    <div className="SideNav">
        <span>Start timestamp</span>
        <Form.Control type="number" onChange={handleStartChange} />
        <br />
        <span>End timestamp</span>
        <Form.Control type="number" onChange={handleEndChange} />
        <br />
        <Button className="float-right" onClick={handleSubmit}>
            Apply
        </Button>
    </div>
);

SideNav.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleEndChange: PropTypes.func.isRequired,
    handleStartChange: PropTypes.func.isRequired,
};

export default SideNav;
