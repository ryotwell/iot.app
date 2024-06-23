import { default as CreateThermometer } from 'react-thermometer-component'
import { useTheme } from 'next-themes'
import WidgedCard from '../WidgedCard'

function SuhuRuanganWidged({ current }) {
    const { theme } = useTheme()

    const config = {
        value: current?.temperature ?? 0,
        max: 50,
        steps: 3,
        format: '°C',
        theme: theme,
    }

    return (
        <WidgedCard
            title="Suhu Ruangan"
            description="Menunjukkan suhu ruangan terkini yang diukur oleh sensor."
        >
            <CreateThermometer {...config} />
        </WidgedCard>
    )
}

export default SuhuRuanganWidged
