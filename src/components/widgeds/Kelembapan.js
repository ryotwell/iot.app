import GaugeComponent from 'react-gauge-component'
import WidgedCard from '../WidgedCard'
import { useEffect, useState } from 'react'
import { socket } from '@/lib/utils'

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
        <WidgedCard title='Kelembapan' loading={loading}>
            <GaugeComponent {...config} />
        </WidgedCard>
    )
}

export default KelembapanWidged