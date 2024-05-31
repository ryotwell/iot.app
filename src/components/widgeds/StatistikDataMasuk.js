import React, { useState } from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Bar } from 'react-chartjs-2'
import axios from '@/lib/axios'
import WidgedCard from '../WidgedCard'
import { Skeleton } from '../ui/skeleton'
import useSWR from 'swr'

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
    const [loading, setLoading] = useState(true)

    const { data, mutate } = useSWR(`/api/room/incoming-data-statistics?count_type=${count}`, (url) =>
        axios
            .get(url)
            .then(res => {
                setLoading(false)
                return res.data
            }),
    )

    const chartdata = {
        labels: data?.labels,
        datasets: [
            {
                label: 'Jumlah data masuk',
                data: data?.data,
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    }

    const handleSelect = (value) => {
        setCount(value)
        mutate()
    }

    return (
        <WidgedCard title='Statistik Data Masuk'>
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
                {loading ? (
                    <div className="w-full space-y-2">
                        <Skeleton className='h-24' />
                        <div className='flex space-x-2'>
                            <Skeleton className='h-6 w-2/6' />
                            <Skeleton className='h-6 w-2/6' />
                            <Skeleton className='h-6 w-2/6' />
                            <Skeleton className='h-6 w-2/6' />
                        </div>
                    </div>
                ) : (
                    <Bar options={options} data={chartdata} />
                )}
            </div>
        </WidgedCard>
    )
}

export default StatistikDataMasukWidged