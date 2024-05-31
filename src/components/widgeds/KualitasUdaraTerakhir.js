import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { getAirQualityClassNames, socket } from '@/lib/utils'
import { useEffect, useState } from 'react'
import WidgedCard from '../WidgedCard'

function KualitasUdaraTerakhirWidged() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const getData = () => {
        setLoading(true)
        socket.emit('the_last_seven_days')
    }

    socket.on('the_last_seven_days', (data) => {
        setData(data)
        setLoading(false)
    })

    useEffect(() => {
        getData()
    }, [])

    return (
        <WidgedCard title='Kualitas Udara 7 hari terakhir' lgmax={false} loading={loading}>
            <div className="w-full">
                {loading ? (
                    <div className="flex flex-col space-y-2">
                        <div className="space-y-2">
                            <div className='flex space-x-4'>
                                <Skeleton className="h-8 w-full" />
                                <Skeleton className="h-8 w-1/4" />
                            </div>
                            <div className='flex space-x-4'>
                                <Skeleton className="h-8 w-full" />
                                <Skeleton className="h-8 w-1/4" />
                            </div>
                            <div className='flex space-x-4'>
                                <Skeleton className="h-8 w-full" />
                                <Skeleton className="h-8 w-1/4" />
                            </div>
                            <div className='flex space-x-4'>
                                <Skeleton className="h-8 w-full" />
                                <Skeleton className="h-8 w-1/4" />
                            </div>
                            <div className='flex space-x-4'>
                                <Skeleton className="h-8 w-full" />
                                <Skeleton className="h-8 w-1/4" />
                            </div>
                            <div className='flex space-x-4'>
                                <Skeleton className="h-8 w-full" />
                                <Skeleton className="h-8 w-1/4" />
                            </div>
                            <div className='flex space-x-4'>
                                <Skeleton className="h-8 w-full" />
                                <Skeleton className="h-8 w-1/4" />
                            </div>
                            <div className='flex space-x-4'>
                                <Skeleton className="h-8 w-full" />
                                <Skeleton className="h-8 w-1/4" />
                            </div>
                            <div className='flex space-x-4'>
                                <Skeleton className="h-8 w-full" />
                                <Skeleton className="h-8 w-1/4" />
                            </div>
                        </div>
                    </div>
                ) : (
                    <Table>
                        <TableCaption>Data 7 Hari Terakhir.</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-full">Tanggal</TableHead>
                                <TableHead>Rata Rata Temperatur</TableHead>
                                <TableHead>Rata Rata Kelembapan</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="text-slate-600">
                            {data?.map((x, key) => {
                                return (
                                    <TableRow key={key}>
                                        <TableCell className="font-medium">{x.name}</TableCell>
                                        <TableCell className="font-medium">{x.average_temperature}</TableCell>
                                        <TableCell className="font-medium">{x.average_humidity}</TableCell>
                                        <TableCell>
                                            <Badge className={`text-white uppercase ${(getAirQualityClassNames(x.category))}`}>{x.category}</Badge>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                )}
            </div>
        </WidgedCard>
    )
}

export default KualitasUdaraTerakhirWidged