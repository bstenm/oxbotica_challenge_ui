/*  eslint-disable import/prefer-default-export */
import axios from 'axios';
import { buildApiUrl } from './utils';
import {
    STOP_LOADER,
    START_LOADER,
    TELEMETRY_DATA_FETCHED,
    TELEMETRY_DATA_FETCHED_ERROR,
} from './config/action-types';

export const getTelemetryData = (start, end) => dispatch => {
    dispatch({
        type: START_LOADER,
    });
    axios
        .get(buildApiUrl(start, end))
        .then(res => {
            dispatch({
                type: STOP_LOADER,
            });
            dispatch({
                type: TELEMETRY_DATA_FETCHED,
                payload: res.data,
            });
        })
        .catch(err => {
            dispatch({
                type: 'STOP_LOADER',
            });
            dispatch({
                type: TELEMETRY_DATA_FETCHED_ERROR,
                payload: err,
            });
        });
};
