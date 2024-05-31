import GaugeComponent from 'react-gauge-component'
import WidgedCard from '../WidgedCard'
import { useRoom } from '@/hooks/room'

function KelembapanWidged() {
    const { data } = useRoom()

    const config = {
        value: data?.humidity,
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


    return (
        <WidgedCard title='Kelembapan'>
            <GaugeComponent {...config} />
        </WidgedCard>
    )
}

export default KelembapanWidged