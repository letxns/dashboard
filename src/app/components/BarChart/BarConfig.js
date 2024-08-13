const datasetOne = [
  {
    type: "Type 1",
    value: 30,
  },
  {
    type: "Type 2",
    value: 8,
  },
  {
    type: "Type 3",
    value: 7,
  },
  {
    type: "Type 4",
    value: 6,
  },
  {
    type: "Type 5",
    value: 20,
  },
  {
    type: "Type 6",
    value: 67,
  },
  {
    type: "Type 7",
    value: 71,
  },
]

const datasetTwo = [
  {
    type: "Type 1",
    value: 24,
  },
  {
    type: "Type 2",
    value: 8,
  },
  {
    type: "Type 3",
    value: 6,
  },
  {
    type: "Type 4",
    value: 11,
  },
  {
    type: "Type 5",
    value: 16,
  },
  {
    type: "Type 6",
    value: 32,
  },
  {
    type: "Type 7",
    value: 69,
  },
]

const dataLabels = datasetOne.map((item) => item.type);
const dataFromDatasetOne = datasetOne.map((item) => item.value);
const dataFromDatasetTwo = datasetTwo.map((item) => item.value);

const config = {
  labels: dataLabels,
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