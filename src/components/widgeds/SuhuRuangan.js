import { default as CreateThermometer } from 'react-thermometer-component'

function SuhuRuanganWidged({ value }) {
    const config = {
        value,
        max: 50,
        steps: 3,
        format: '°C',
        theme: 'light'
    }

    return (
        <>
            <CreateThermometer {...config}/>
        </>
    )
}

export default SuhuRuanganWidged