import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from '@/components/ui/select'

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
            text: 'Statistik Visualisasi Data',
        },
    },
}
  
function StatisticsOfTheLastSevenDaysWidgeds() {
    const [data, setData] = useState({ labels: [], data: { average_humidity: [], average_temperature: [], average_sensor_reading_mq135: [], average_ppm: [] } })
    const [count, setCount] = useState('days-7')
    const [loading, setLoading] = useState(true)

    const getWidgetTitle = (label) => {
        if ( count === 'hours-12' ) {
            return `${label} 12 jam terakhir`
        }

        if ( count === 'hours-24' ) {
            return `${label} 24 jam terakhir`
        }

        if ( count === 'days-7' ) {
            return `${label} 7 hari terakhir`
        }

        if ( count === 'days-12' ) {
            return `${label} 12 hari terakhir`
        }
    }
    
    const handleSelect = (value) => {
        setCount(value)
    }

    const getData = () => {
        setLoading(true)
        socket.emit('statistics_of_the_last', { count })
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
        getData()
    }, [count])

    useEffect(() => {
        socket.on('statistics_of_the_last', (data) => {
            setData(data)
            setLoading(false)
        })

        return () => [
            socket.off('statistics_of_the_last'),
        ]
    }, [])

    return (
        <>
            <swiper-container>
                <swiper-slide>
                    <WidgedCard title={getWidgetTitle('Suhu')} description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, velit.">
                        <Wrapper {...{ count, loading, handleSelect }}>
                            <Line options={options} data={ReactChartTemperatureData} />
                        </Wrapper>
                    </WidgedCard>
                </swiper-slide>
                <swiper-slide>
                    <WidgedCard title={getWidgetTitle('Gas')} description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, velit.">
                        <Wrapper {...{ count, loading, handleSelect }}>
                            <Line options={options} data={ReactChartReadingMQ135Data} />
                        </Wrapper>
                    </WidgedCard>
                </swiper-slide>
            </swiper-container>

            <swiper-container>
                <swiper-slide>
                    <WidgedCard title={getWidgetTitle('Kelembapan')} description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, velit.">
                        <Wrapper {...{ count, loading, handleSelect }}>
                            <Line options={options} data={ReactChartHumidityData} />
                        </Wrapper>
                    </WidgedCard>
                </swiper-slide>
                <swiper-slide>
                    <WidgedCard title={getWidgetTitle('PPM')} description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, velit.">
                        <Wrapper {...{ count, loading, handleSelect }}>
                            <Line options={options} data={ReactChartPPMData} />
                        </Wrapper>
                    </WidgedCard>
                </swiper-slide>
            </swiper-container>
        </>
    )
}

const Wrapper = ({ children, count, loading, handleSelect }) => {
    return (
        <div className='w-full'>
            <div className='flex justify-start mb-4'>
                <SelectComponent count={count} handleSelect={handleSelect} loading={loading} />
            </div>
            {children}
        </div>
    )
}

const SelectComponent = ({ count, loading, handleSelect }) => {
    return (
        <Select value={count} onValueChange={handleSelect} disabled={loading}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="--- [ PILIH ] ---" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="hours-12">12 Jam Terakhir</SelectItem>
                <SelectItem value="hours-24">24 Jam Terakhir</SelectItem>
                <SelectItem value="days-7">7 Hari Terakhir</SelectItem>
                <SelectItem value="days-12">12 Hari Terakhir</SelectItem>
            </SelectContent>
        </Select>
    )
}

export default StatisticsOfTheLastSevenDaysWidgeds