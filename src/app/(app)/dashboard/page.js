'use client'

import Header from '@/app/(app)/Header'
import { Button } from '@/components/ui/button'
import KelembapanWidged from '@/components/widgeds/Kelembapan'
import KualitasUdaraWidget from '@/components/widgeds/KualitasUdara'
import KualitasUdaraTerakhirWidged from '@/components/widgeds/KualitasUdaraTerakhir'
import StatistikDataMasukWidged from '@/components/widgeds/StatistikDataMasuk'
import SuhuRuanganWidged from '@/components/widgeds/SuhuRuangan'
import { useAuth } from '@/hooks/auth'
import axios from '@/lib/axios'
import { socket } from '@/lib/utils'
import { useEffect, useState } from 'react'

const Dashboard = () => {
    const { user } = useAuth({ middleware: 'auth' })
    const [ lastData, setLastData ] = useState({})

    const getData = () => {
        axios.get(`/api/room/current`).then(({ data }) => {
            setLastData(data)
        })
    }

    const handleButton = () => {
        console.log('clicked')

        socket.emit('incoming_data_statistics')
    }

    socket.on('incoming_data_statistics', (data) => {
        console.log(data)
    })

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <Header title="Dashboard" />

            <div className="pt-8">
                <div className="bg-white dark:bg-slate-900 p-10">
                    <p className='mb-4'>Selamat datang di area Dashboard <span className='text-blue-500 font-semibold'>{user?.name}</span></p>
                    <Button onClick={handleButton}>
                        Click Me
                    </Button>
                </div>
            </div>

            <div className="lg:flex p-4 lg:p-8 space-y-4 lg:space-x-4 lg:space-y-0">
                <div className="lg:w-1/2 grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <KualitasUdaraWidget data={lastData} />
                    <KelembapanWidged />
                    <SuhuRuanganWidged value={lastData?.temperature ?? 0} />
                    <StatistikDataMasukWidged />
                </div>
                <div className="lg:w-1/2">
                    <KualitasUdaraTerakhirWidged />
                </div>
            </div>

            {/* <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            You are logged in!
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Dashboard