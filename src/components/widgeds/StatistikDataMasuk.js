import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Bar } from 'react-chartjs-2'
import axios from '@/lib/axios'

ChartJS.register( CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
            position: 'top',
        },
        title: {
            display: false,
            text: 'Bar Chart',
        },
    },
}

function StatistikDataMasukWidged() {
    const [count, setCount] = useState(1)
    const [data, setData] = useState({})

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

    const getIncomingDataStatistics = () => {
        axios.get(`/api/room/incoming-data-statistics?count_type=${count}`).then(({ data }) => {
            setData(data)
        })
    }

    const handleSelect = (value) => {
        setCount(value)
    }

    useEffect(() => {
        getIncomingDataStatistics()
    }, [count])

    return (
        <div className='w-full'>
            <div className='mb-4'>
                <Select onValueChange={handleSelect} className="dark:text-slate-300">
                    <SelectTrigger className="w-[180px] dark:text-slate-300">
                        <SelectValue placeholder="7 Bulan Yang Lalu" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="1">7 Bulan Yang Lalu</SelectItem>
                        <SelectItem value="2">12 Bulan Yang Lalu</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <Bar options={options} data={chartdata} />
        </div>
    )
}

export default StatistikDataMasukWidged