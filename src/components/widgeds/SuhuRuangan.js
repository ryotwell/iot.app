import { default as CreateThermometer } from 'react-thermometer-component'
import { useTheme } from 'next-themes'
import WidgedCard from '../WidgedCard'
import { useEffect, useState } from 'react'
import { socket } from '@/lib/utils'

function SuhuRuanganWidged() {
    const [ current, setCurrent ] = useState({})
    const [ loading, setLoading ] = useState(true)
    const { theme } = useTheme()
    
    const getCurrent = () => {
        setLoading(true)
        socket.emit('current')
    }

    socket.on('current', (data) => {
        setCurrent(data)
        setLoading(false)
    })

    useEffect(() => {
        getCurrent()
    }, [])

    const config = {
        value: current?.temperature,
        max: 50,
        steps: 3,
        format: '°C',
        theme: theme
    }

    return (
        <WidgedCard title='Suhu Ruangan' loading={loading}>
            <CreateThermometer {...config}/>
        </WidgedCard>
    )
}

export default SuhuRuanganWidged