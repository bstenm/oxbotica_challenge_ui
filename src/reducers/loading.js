export default (state = false, { type }) => {
    if (type === 'START_LOADER') {
        return true;
    }

    if (type === 'STOP_LOADER') {
        return false;
    }

    return state;
};
