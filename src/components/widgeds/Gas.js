import Tank from '../Tank'
import WidgedCard from '../WidgedCard'

function GasWidged({ current }) {
    return (
        <WidgedCard
            title="Gas"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        >
            <Tank
                max={600}
                value={current.sensor_reading_mq135 ?? 0}
            />
        </WidgedCard>
    )
}

export default GasWidged