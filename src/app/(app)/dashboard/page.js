'use client'

import { toast } from 'sonner'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { getCurrentTime, socket } from '@/lib/utils'

import GasWidged from '@/components/widgeds/Gas'
import TeamWidged from '@/components/widgeds/Team'
import LastDataWidged from '@/components/widgeds/LastData'
import SettingsWidged from '@/components/widgeds/Settings'
import WhatsappWidged from '@/components/widgeds/Whatsapp'
import KelembapanWidged from '@/components/widgeds/Kelembapan'
import SuhuRuanganWidged from '@/components/widgeds/SuhuRuangan'
import StatistikDataMasukWidged from '@/components/widgeds/StatistikDataMasuk'
import KualitasUdaraTerakhirWidged from '@/components/widgeds/LastAirQuality/KualitasUdaraTerakhir'
import StatisticsOfTheLastWidgeds from '@/components/widgeds/StatisticsOfTheLastWidgeds'

import Header from '@/app/(app)/Header'
import ImportantAlerts from '@/components/ImportantAlerts'
import {
    HttpClientnOnlineTips,
    ThemeTips,
    UserTips,
} from '@/components/Dashboard/Tips'

const Dashboard = () => {
    const { user } = useAuth({ middleware: 'auth' })

    const [current, setCurrent] = useState({})
    const [currentLoading, setCurrentLoading] = useState(true)

    const getCurrent = () => {
        setCurrentLoading(true)
        socket.emit('current')
    }

    useEffect(() => {
        socket.on('send_notif', () => {
            if (user.setting.dht_11_real_time_notification) {
                toast.success('DHT 11 baru saja mengirimkan data baru', {
                    description: getCurrentTime(),
                })
            }
        })

        socket.on('current', data => {
            setCurrent(data)
            setCurrentLoading(false)
        })

        return () => [socket.off('send_notif'), socket.off('current')]
    }, [])

    useEffect(() => {
        getCurrent()
    }, [])

    return (
        <>
            <Header title="Dashboard" />

            <div className="pt-8">
                <div className="bg-white dark:bg-slate-900 p-10">
                    <div className="grid grid-cols-0 lg:grid-cols-4 gap-10 items-center">
                        <UserTips user={user} />
                        <ThemeTips />
                        <HttpClientnOnlineTips />
                    </div>
                </div>
            </div>

            <div className="lg:flex p-4 space-y-4 lg:space-y-0 lg:space-x-4">
                <div className="lg:w-1/2 grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <GasWidged {...{ current, loading: currentLoading }} />
                    <KelembapanWidged
                        {...{ current, loading: currentLoading }}
                    />
                    <SuhuRuanganWidged
                        {...{ current, loading: currentLoading }}
                    />
                    <StatistikDataMasukWidged />
                    <StatisticsOfTheLastWidgeds />
                    <LastDataWidged {...{ current, loading: currentLoading }} />
                    <WhatsappWidged />
                </div>
                <div className="lg:w-1/2 grid grid-cols-1 gap-4">
                    <KualitasUdaraTerakhirWidged />
                    <SettingsWidged />
                    <TeamWidged />
                </div>
            </div>

            <div className="flex justify-center items-center py-16 text-sm text-slate-950/60 underline">
                {`Optima`}
            </div>

            <ImportantAlerts {...{ current }} />
        </>
    )
}

export default Dashboard
