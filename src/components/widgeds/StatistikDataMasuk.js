import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
            position: 'top',
        },
        title: {
            display: false,
            text: 'Chart.js Bar Chart',
        },
    },
}

function StatistikDataMasukWidged({ data }) {
    const chartdata = {
        labels: data.labels,
        datasets: [
            {
                label: 'Jumlah data masuk',
                data: data.data,
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    }

    return <Bar options={options} data={chartdata} />
}

export default StatistikDataMasukWidged