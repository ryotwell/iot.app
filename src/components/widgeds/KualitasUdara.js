import { getAirQualityClassNames, socket } from '@/lib/utils'
import WidgedCard from '../WidgedCard'
import { useEffect, useState } from 'react'

function KualitasUdaraWidget() {
    const [current, setCurrent] = useState({})
    const [loading, setLoading] = useState(true)

    const getCurrent = () => {
        setLoading(true)
        socket.emit('current')
    }

    useEffect(() => {
        getCurrent()
    }, [])

    useEffect(() => {
        socket.on('current', (data) => {
            setCurrent(data)
            setLoading(false)
        })

        return () => {
            socket.off('current')
        }
    }, [])

    return (
        <WidgedCard title='Kualitas Udara' contentClassName='justify-center items-center h-60' loading={loading}>
            <div className='text-center'>
                <span className={'py-3 px-8 rounded-full uppercase font-semibold text-slate-100 '+ getAirQualityClassNames(current?.category)}>{current?.category}</span>
                <h1 className='mt-4 text-xs dark:text-slate-300'>
                    {current?.diff_for_humans}
                </h1>
            </div>
        </WidgedCard>
    )
}

export default KualitasUdaraWidget