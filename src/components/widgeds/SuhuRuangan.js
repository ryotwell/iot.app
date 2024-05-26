import { default as CreateThermometer } from 'react-thermometer-component'
import { useTheme } from 'next-themes'

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
        <>
            <CreateThermometer {...config}/>
        </>
    )
}

export default SuhuRuanganWidged