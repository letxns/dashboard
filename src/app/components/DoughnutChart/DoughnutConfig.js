export const data = [
    {
        seller: "Seller 1",
        value: 300,
    },
    {
        seller: "Seller 2",
        value: 50,
    },
    {
        seller: "Seller 3",
        value: 100,
    },
]

const labels = data.map((item) => item.seller);
const values = data.map((item) => item.value);

const config = {
    labels: labels,
    datasets: [{
    label: 'Best Sellers',
    data: values,
    backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
    }]
};
export default config;