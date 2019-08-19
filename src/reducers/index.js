import { combineReducers } from 'redux';
import loading from './loading';
import telemetryData from './telemetryData';

export default combineReducers({
    loading,
    telemetryData,
});
