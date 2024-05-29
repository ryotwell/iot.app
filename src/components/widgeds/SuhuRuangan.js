import { default as CreateThermometer } from 'react-thermometer-component'
import { useTheme } from 'next-themes'
import WidgedCard from '../WidgedCard'

function SuhuRuanganWidged({ value }) {
    const { theme } = useTheme()

    const config = {
        value,
        max: 50,
        steps: 3,
        format: '°C',
        theme: theme
    }

    return (
        <WidgedCard title='Suhu Ruangan'>
            <CreateThermometer {...config}/>
        </WidgedCard>
    )
}

export default SuhuRuanganWidged