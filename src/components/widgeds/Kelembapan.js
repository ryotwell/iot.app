import GaugeComponent from 'react-gauge-component'
import WidgedCard from '../WidgedCard'
import { useEffect, useState } from 'react'
import { socket } from '@/lib/utils'
import TimeCounter from '../TimeCounter'

function KelembapanWidged() {
    const [current, setCurrent] = useState({})
    const [loading, setLoading] = useState(true)

    const getCurrent = () => {
        setLoading(true)
        socket.emit('current')
    }

    const config = {
        value: current?.humidity,
        type: 'radial',
        labels: {
            tickLabels: {
                type: "inner",
                ticks: [
                    { value: 20 },
                    { value: 40 },
                    { value: 60 },
                    { value: 80 },
                    { value: 100 }
                ]
            }
        },
        arc: {
            colorArray: ['#EA4228','#5BE12C'],
            subArcs: [{limit: 10}, {limit: 30}, {}, {}, {}],
            padding: 0.02,
            width: 0.3
        },
        pointer: {
            elastic: true,
            animationDelay: 0
        },
    }

    socket.on('current', (data) => {
        setCurrent(data)
        setLoading(false)
    })

    useEffect(() => {
        getCurrent()
    }, [])

    return (
        <WidgedCard
            title='Kelembapan'
            description='Menampilkan tingkat kelembapan saat ini di ruangan yang dipantau.'
            loading={loading}
        >
            <div>
                <GaugeComponent {...config} />
                <div className="text-center text-slate-950/50 dark:text-slate-100/50">
                    <div className='text-xs'>
                        Terakhir di update
                    </div>
                    <div className='text-xs'>
                        <TimeCounter createdAt={current.created_at} />
                    </div>
                </div>
            </div>
        </WidgedCard>
    )
}

export default KelembapanWidged