import pick from 'lodash/pick';
import clone from 'lodash/clone';
import isArray from 'lodash/isArray';
import mergeWith from 'lodash/mergeWith';
import { TELEMETRY_DATA_FETCHED } from '../config/action-types';

const initialState = {
    speed: [],
    timestamp: [],
    autonomy_state: [],
};

export default (state = initialState, { type, payload }) => {
    if (type !== TELEMETRY_DATA_FETCHED) {
        return state;
    }

    let telemetryData = clone(initialState);

    payload.data.forEach(entry => {
        // get relevant data into 3 arrays: autonomy_state, speed, timestamp
        telemetryData = mergeWith(
            telemetryData,
            // only keep relevant data
            pick(entry, ['autonomy_state', 'speed', 'timestamp']),
            // define type of merge: push values into corresponding arrays
            (objValue, srcValue) => {
                if (isArray(objValue)) {
                    return objValue.concat(srcValue);
                }
                return false;
            },
        );
    });

    return telemetryData;
};
