import config from './config';

export const buildApiUrl = (start, end) => {
    let url = config.apiEndPoint;

    if (!start && !end) {
        return url;
    }

    url += '?';
    const params = [];

    if (end) params.push(`end=${end}`);
    if (start) params.push(`start=${start}`);

    return `${url}${params.join('&')}`;
};

export const buildChartData = data => ({
    labels: data.timestamp,
    datasets: Object.keys(config.chartDataType).map(type =>
        Object.assign(
            {},
            {
                data: data[type],
            },
            config.chartDataType[type],
        ),
    ),
});
