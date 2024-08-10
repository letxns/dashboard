const datasetOne = [
  {
    value: 30,
  },
  {
    value: 8,
  },
  {
    value: 7,
  },
  {
    value: 6,
  },
  {
    value: 20,
  },
  {
    value: 67,
  },
  {
    value: 71,
  },
]

const datasetTwo = [
  {
    value: 24,
  },
  {
    value: 8,
  },
  {
    value: 6,
  },
  {
    value: 11,
  },
  {
    value: 16,
  },
  {
    value: 32,
  },
  {
    value: 69,
  },
]

const dataFromDatasetOne = datasetOne.map((item) => item.value);
const dataFromDatasetTwo = datasetTwo.map((item) => item.value);

const config = {
  labels: ['Type 1', 'Type 2', 'Type 3', 'Type 4', 'Type 5', 'Type 6', 'Type 7'],
  datasets: [
    {
      label: 'Dataset 1',
      data: dataFromDatasetOne,
      fill: false,
      borderColor: [
        'rgb(255, 159, 64)',
      ],
      backgroundColor: [
        'rgb(255, 159, 64)',
      ],
      type: 'line',
      order: 1,
    },
    {
      label: 'Dataset 2',
      data: dataFromDatasetTwo,
      fill: false,
      borderColor:  [
        'rgba(54, 162, 235, 0.2)',
        ],
      backgroundColor: [
        'rgb(54, 162, 235)',
      ],
      order: 2,
    },
  ]
};

export default config;