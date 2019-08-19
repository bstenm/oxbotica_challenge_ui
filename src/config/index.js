const barChartColor = '#71B37C';
const lineChartColor = '#EC932F';

const chartOptions = {
    responsive: true,
    tooltips: {
        mode: 'label',
    },
    elements: {
        line: {
            fill: false,
        },
    },
    scales: {
        xAxes: [
            {
                display: true,
                gridLines: {
                    display: false,
                },
                labels: {
                    show: true,
                },
            },
        ],
        yAxes: [
            {
                type: 'linear',
                display: true,
                position: 'left',
                id: 'speed',
                gridLines: {
                    display: false,
                },
                labels: {
                    show: true,
                },
            },
            {
                type: 'linear',
                display: true,
                position: 'right',
                id: 'autonomy_state',
                gridLines: {
                    display: false,
                },
                labels: {
                    show: true,
                },
            },
        ],
    },
};

const chartDataType = {
    autonomy_state: {
        label: 'Autonomy State',
        type: 'bar',
        fill: false,
        borderColor: barChartColor,
        backgroundColor: barChartColor,
        pointBorderColor: barChartColor,
        pointBackgroundColor: barChartColor,
        pointHoverBackgroundColor: barChartColor,
        pointHoverBorderColor: barChartColor,
    },
    speed: {
        label: 'Speed',
        type: 'line',
        fill: false,
        backgroundColor: lineChartColor,
        borderColor: lineChartColor,
        hoverBackgroundColor: lineChartColor,
        hoverBorderColor: lineChartColor,
    },
};

const apiEndPoint = `http://localhost:5000/telemetry-data`;

export default { chartDataType, chartOptions, apiEndPoint };
