'use client'

import * as React from 'react'
import WidgedCard from '@/components/WidgedCard'
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

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
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

export const getTimes = () => {
    const arrays = []

    for (let index = 0; index < 5; index++) {
        arrays.push(getTimeTenSecondsAhead(index))
    }

    return arrays.reverse()
}
export const getTimeTenSecondsAhead = addMinutes => {
    // Mendapatkan waktu saat ini
    let currentTime = new Date()

    // Menambahkan 10 detik ke waktu saat ini
    currentTime.setMinutes(currentTime.getMinutes() - addMinutes)

    // Format jam dalam AM/PM
    let hours = currentTime.getHours()
    let minutes = currentTime.getMinutes()
    let ampm = hours >= 12 ? 'PM' : 'AM'

    // Mengonversi jam ke format 12-jam
    hours = hours % 12
    hours = hours ? hours : 12 // Jam '0' harus diubah menjadi '12'

    // Mengonversi menit ke format 2 digit
    minutes = minutes < 10 ? '0' + minutes : minutes

    // Menggabungkan semua dalam format yang diinginkan
    let timeString = `${hours}:${minutes} ${ampm}`

    return timeString
}

function Sanbox() {
    const [times, setTimes] = React.useState(getTimes() ?? [])

    const ReactChartTemperatureData = {
        labels: times,
        datasets: [
            {
                label: 'Suhu',
                data: [12, 14, 19, 4, 60],
                borderColor: '#e879f9',
                backgroundColor: '#d946ef',
            },
        ],
    }

    React.useEffect(() => {
        const interval = setInterval(() => {
            const newTimes = getTimes()

            setTimes(newTimes)
        }, 1000 * 60)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="lg:flex justify-center items-center h-screen">
            <div className="lg:w-1/2 p-4">
                <swiper-container>
                    <swiper-slide>
                        <WidgedCard
                            title="Temperature"
                            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, velit."
                        >
                            <Line
                                options={options}
                                data={ReactChartTemperatureData}
                            />
                        </WidgedCard>
                    </swiper-slide>
                    <swiper-slide>
                        <WidgedCard
                            title="Humidity"
                            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, velit."
                        >
                            <Line
                                options={options}
                                data={ReactChartTemperatureData}
                            />
                        </WidgedCard>
                    </swiper-slide>
                </swiper-container>
            </div>
        </div>
    )
}

export default Sanbox
