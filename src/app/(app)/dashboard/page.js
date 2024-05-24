'use client'

import Header from '@/app/(app)/Header'
import WidgedCard from '@/components/WidgedCard'
import GaugeWidged from '@/components/widgeds/Gauge'
import { useAuth } from '@/hooks/auth'
import axios from '@/lib/axios'
import { useEffect, useState } from 'react'

const Dashboard = () => {
    const { user } = useAuth({ middleware: 'auth' })
    const [ room, setRoom ] = useState({})

    const getRoom = () => {
        axios.get('/api/room').then(({ data }) => {
            setRoom(data)
        })
    }

    useEffect(() => {
        getRoom()
    }, [])

    return (
        <>
            <Header title="Dashboard" />

            <div className="pt-8">
                <div className="bg-white p-10">
                    <p>Selamat datang di area Dashboard <span className='text-blue-500 font-semibold'>{user?.name}</span></p>
                </div>
            </div>

            <div className="p-8 grid grid-cols-1 lg:grid-cols-4 gap-4">
                <WidgedCard title='Suhu Ruangan'>
                    <GaugeWidged value={room?.temperature ?? 0} />
                </WidgedCard>
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