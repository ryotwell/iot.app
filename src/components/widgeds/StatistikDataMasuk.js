import React, { useEffect, useState } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Bar } from 'react-chartjs-2'
import WidgedCard from '../WidgedCard'
import { Skeleton } from '../ui/skeleton'
import { socket } from '@/lib/utils'
import { LoaderCircle } from 'lucide-react'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

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
    const [incomingDataStatistics, setIncomingDataStatistics] = useState({})

    const chartdata = {
        labels: incomingDataStatistics?.labels,
        datasets: [
            {
                label: 'Jumlah data masuk',
                data: incomingDataStatistics?.data,
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    }

    const getIncomingDataStatistics = () => {
        setLoading(true)
        socket.emit('incoming_data_statistics', { count_type: count })
    }

    const handleSelect = value => {
        setCount(value)
    }

    useEffect(() => {
        getIncomingDataStatistics()
    }, [count])

    useEffect(() => {
        socket.on('incoming_data_statistics', data => {
            setIncomingDataStatistics(data)
            setLoading(false)
        })

        return () => {
            socket.off('incoming_data_statistics')
        }
    }, [])

    return (
        <WidgedCard
            title="Statistik Data Masuk"
            description="Statistik dan jumlah data yang telah masuk ke sistem dalam periode waktu tertentu."
        >
            <div className="w-full">
                <div className="mb-4 flex items-center">
                    <Select
                        onValueChange={handleSelect}
                        className="dark:text-slate-300"
                        disabled={loading}
                    >
                        <SelectTrigger className="w-[180px] dark:text-slate-300">
                            <SelectValue placeholder="7 Bulan Terakhir" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1">7 Bulan Terakhir</SelectItem>
                            <SelectItem value="2">12 Bulan Terakhir</SelectItem>
                        </SelectContent>
                    </Select>
                    {loading && (
                        <LoaderCircle className="ml-4 animate-spin text-slate-950 dark:text-slate-700" />
                    )}
                </div>
                {loading ? (
                    <div className="w-full space-y-2">
                        <Skeleton className="h-24" />
                        <div className="flex space-x-2">
                            <Skeleton className="h-6 w-2/6" />
                            <Skeleton className="h-6 w-2/6" />
                            <Skeleton className="h-6 w-2/6" />
                            <Skeleton className="h-6 w-2/6" />
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
