'use client'

import Header from '@/app/(app)/Header'
import Team from '@/components/Team'
import WidgedCard from '@/components/WidgedCard'
import KelembapanWidged from '@/components/widgeds/Kelembapan'
import KualitasUdaraTerakhirWidged from '@/components/widgeds/KualitasUdaraTerakhir'
import StatistikDataMasukWidged from '@/components/widgeds/StatistikDataMasuk'
import SuhuRuanganWidged from '@/components/widgeds/SuhuRuangan'
import { useAuth } from '@/hooks/auth'

const Dashboard = () => {
    const { user } = useAuth({ middleware: 'auth' })

    return (
        <>
            <Header title="Dashboard" />

            <div className="pt-8">
                <div className="bg-white dark:bg-slate-900 p-10">
                    <p className='mb-4'>Selamat datang di area Dashboard <span className='text-blue-500 font-semibold'>{user?.name}</span></p>
                </div>
            </div>

            <div className='lg:flex p-4 space-x-4'>
                <div className="lg:w-1/2 grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <KelembapanWidged />
                    <SuhuRuanganWidged />
                    <StatistikDataMasukWidged />
                </div>
                <div className="lg:w-1/2 grid grid-cols-1 gap-4">
                    <KualitasUdaraTerakhirWidged />
                    <WidgedCard title='Anggota'>
                        <Team />
                    </WidgedCard>
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