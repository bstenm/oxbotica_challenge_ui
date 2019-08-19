import { connect } from 'react-redux';
import Chart from './Chart';

export default connect(({ loading, telemetryData }) => ({
    loading,
    telemetryData,
}))(Chart);
