'use client'

import { toast } from 'sonner'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { getFormattedTimeForError, ryotwell, socket } from '@/lib/utils'

import Header from '@/app/(app)/Header'
import GasWidged from '@/components/widgeds/Gas'
import TeamWidged from '@/components/widgeds/Team'
import LastDataWidged from '@/components/widgeds/LastData'
import SettingsWidged from '@/components/widgeds/Settings'
import KelembapanWidged from '@/components/widgeds/Kelembapan'
import SuhuRuanganWidged from '@/components/widgeds/SuhuRuangan'
import StatistikDataMasukWidged from '@/components/widgeds/StatistikDataMasuk'
import KualitasUdaraTerakhirWidged from '@/components/widgeds/LastAirQuality/KualitasUdaraTerakhir'
import StatisticsOfTheLastWidgeds from '@/components/widgeds/StatisticsOfTheLastWidgeds'
import ImportantAlerts from '@/components/ImportantAlerts'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Info } from 'lucide-react'

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
                    description: getFormattedTimeForError(),
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
                    <div className="grid grid-cols-0 lg:grid-cols-4 gap-10 lg:gap-0 items-center">
                        <div className="flex space-x-4">
                            <Avatar>
                                <AvatarImage src="/team/noprofile.jpg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div>
                                <a
                                    className="text-sm hover:text-purple-500 duration-300"
                                    href={ryotwell.webprofile}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {user?.name}
                                </a>
                                <div className="text-xs text-slate-900/50 dark:text-slate-100/50">
                                    {user?.email}
                                </div>
                            </div>
                        </div>
                        <Alert>
                            <Info className="h-4 w-4" />
                            <AlertTitle>Information!</AlertTitle>
                            <AlertDescription className="flex items-center justify-between">
                                <div className="text-slate-950/50 dark:text-slate-100/50">
                                    Terlalu terang? anda bisa menggunakan tema
                                    darkmode.
                                </div>
                                <div>
                                    <ThemeToggle />
                                </div>
                            </AlertDescription>
                        </Alert>
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
                </div>
                <div className="lg:w-1/2 grid grid-cols-1 gap-4">
                    <KualitasUdaraTerakhirWidged />
                    <SettingsWidged />
                    <TeamWidged />
                </div>
            </div>

            <div className="flex justify-center items-center py-16 text-sm text-slate-950/60 underline">
                {`Let's Try`}
            </div>

            <ImportantAlerts {...{ current }} />

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
