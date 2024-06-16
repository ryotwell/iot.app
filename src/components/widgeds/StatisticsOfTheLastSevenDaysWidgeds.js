import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

import { Line } from 'react-chartjs-2'
import WidgedCard from '../WidgedCard'
import { useEffect, useState } from 'react'
import { socket } from '@/lib/utils'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)
  
export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
        },
        title: {
            display: true,
            text: 'Statistik Data',
        },
    },
}
  
function StatisticsOfTheLastSevenDaysWidgeds() {
    const [data, setData] = useState({ labels: [], data: { average_humidity: [], average_temperature: [], average_sensor_reading_mq135: [], average_ppm: [] } })

    const getData = () => {
        socket.emit('statistics_of_the_last_7_days')
    }

    const ReactChartTemperatureData = {
        labels: data.labels,
        datasets: [
            {
                label: 'Suhu',
                data: data.data.average_temperature,
                borderColor: '#e879f9',
                backgroundColor: '#d946ef',
            },
        ],
    }

    const ReactChartHumidityData = {
        labels: data.labels,
        datasets: [
            {
                label: 'Kelembapan',
                data: data.data.average_humidity,
                borderColor: '#a78bfa',
                backgroundColor: '#8b5cf6',
            },
        ],
    }

    const ReactChartReadingMQ135Data = {
        labels: data.labels,
        datasets: [
            {
                label: 'Gas',
                data: data.data.average_sensor_reading_mq135,
                borderColor: '#38bdf8',
                backgroundColor: '#0ea5e9',
            },
        ],
    }

    const ReactChartPPMData = {
        labels: data.labels,
        datasets: [
            {
                label: 'PPM',
                data: data.data.average_ppm,
                borderColor: '#818cf8', // 400
                backgroundColor: '#4338ca', // 500
            },
        ],
    }

    useEffect(() => {
        socket.on('statistics_of_the_last_7_days', (data) => {
            setData(data)
        })

        getData()

        return () => {
            socket.off('statistics_of_the_last_7_days')
        }
    }, [])

    return (
        <>
            <WidgedCard
                title="Suhu 7 hari terakhir"
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, velit."
            >
                <Line options={options} data={ReactChartTemperatureData} />
            </WidgedCard>
            <WidgedCard
                title="Kelembapan 7 hari terakhir"
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, velit."
            >
                <Line options={options} data={ReactChartHumidityData} />
            </WidgedCard>
            <WidgedCard
                title="Gas 7 hari terakhir"
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, velit."
            >
                <Line options={options} data={ReactChartReadingMQ135Data} />
            </WidgedCard>
            <WidgedCard
                title="PPM 7 hari terakhir"
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, velit."
            >
                <Line options={options} data={ReactChartPPMData} />
            </WidgedCard>
        </>
    )
}

export default StatisticsOfTheLastSevenDaysWidgeds