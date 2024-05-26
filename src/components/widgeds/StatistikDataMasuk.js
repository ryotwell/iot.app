import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bar } from 'react-chartjs-2'

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
            text: 'Chart.js Bar Chart',
        },
    },
}

function StatistikDataMasukWidged({ data, setIncomingDataStatistics }) {
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

    const handleSelect = (value) => {
        setIncomingDataStatistics(value)
    }

    return (
        <>
            <div className='mb-4'>
                <Select onValueChange={handleSelect}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="7 Bulan Yang Lalu" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="1">7 Bulan Yang Lalu</SelectItem>
                        <SelectItem value="2">12 Bulan Yang Lalu</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <Bar options={options} data={chartdata} />
        </>
    )
}

export default StatistikDataMasukWidged