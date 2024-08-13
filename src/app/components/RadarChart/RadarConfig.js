const datasetOne = [
    {
        label: 'Supplier 1',
        value: 94,
    },
    {
        label: 'Supplier 2',
        value: 62,
    },
    {
        label: 'Supplier 3',
        value: 110,
    },
    {
        label: 'Supplier 4',
        value: 81,
    },
    {
        label: 'Supplier 5',
        value: 97,
    },
    {
        label: 'Supplier 6',
        value: 55,
    },
    {
        label: 'Supplier 7',
        value: 100,
    },
]

const datasetTwo = [
    {
        label: 'Supplier 1',
        value: 28,
    },
    {
        label: 'Supplier 2',
        value: 15,
    },
    {
        label: 'Supplier 3',
        value: 35,
    },
    {
        label: 'Supplier 4',
        value: 19,
    },
    {
        label: 'Supplier 5',
        value: 26,
    },
    {
        label: 'Supplier 6',
        value: 22,
    },
    {
        label: 'Supplier 7',
        value: 38,
    },
];

const dataLabels = datasetOne.map((item) => item.label);
const dataFromDatasetOne = datasetOne.map((item) => item.value);
const dataFromDatasetTwo = datasetTwo.map((item) => item.value);

const config = {
    labels: dataLabels,
    datasets: [{
        label: 'Sells',
        data: dataFromDatasetOne,
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)',
    }, {
        label: 'Complainings',
        data: dataFromDatasetTwo,
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
    }]
};
export default config;