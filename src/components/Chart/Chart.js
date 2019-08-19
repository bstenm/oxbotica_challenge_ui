import React from 'react';
import { Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import config from '../../config';
import { buildChartData } from '../../utils';

import './Chart.css';

const Chart = ({ telemetryData, loading }) => {
    if (loading) {
        // return <div>Loading...</div>;
        return <div class="loading-spinner" />;
    }

    if (!telemetryData.timestamp.length) {
        return <div className="big-message">Please pick a timestamp range</div>;
    }

    return (
        <div className="Chart">
            <Bar data={buildChartData(telemetryData)} options={config.chartOptions} />
        </div>
    );
};

Chart.defaultProps = {
    loading: false,
};

Chart.propTypes = {
    loading: PropTypes.bool,
    telemetryData: PropTypes.shape({
        speed: PropTypes.arrayOf(PropTypes.number).isRequired,
        timestamp: PropTypes.arrayOf(PropTypes.number).isRequired,
        autonomy_state: PropTypes.arrayOf(PropTypes.number).isRequired,
    }).isRequired,
};

export default Chart;
