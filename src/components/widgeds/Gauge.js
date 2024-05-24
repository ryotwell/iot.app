import GaugeComponent from 'react-gauge-component'

function GaugeWidged({ value, ...props }) {    
    const config = {
        value,
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
        <>
            <GaugeComponent {...config} />
        </>
    )
}

export default GaugeWidged