import { getAirQualityClassNames, socket } from '@/lib/utils'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

import WidgedCard from '../../WidgedCard'
import { Badge } from '@/components/ui/badge'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import SheetExport from './SheetExport'

function KualitasUdaraTerakhirWidged() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const getData = () => {
        setLoading(true)
        socket.emit('data_for_the_last')
    }

    useEffect(() => {
        socket.on('data_for_the_last', data => {
            setData(data)
            setLoading(false)
        })

        return () => [socket.off('data_for_the_last')]
    }, [])

    useEffect(() => {
        getData()
    }, [])

    return (
        <WidgedCard
            title="Data 7 hari terakhir"
            description="Menyajikan rata-rata data yang tercatat selama 7 hari terakhir."
            loading={loading}
            right
        >
            <div className="w-full">
                <div className="mb-6 flex">
                    <SheetExport />
                </div>
                <Table>
                    <TableCaption>Data 7 Hari Terakhir.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-full">
                                Hari/Tanggal
                            </TableHead>
                            <TableHead>Gas</TableHead>
                            <TableHead>PPM</TableHead>
                            <TableHead>Suhu</TableHead>
                            <TableHead>Kelembapan</TableHead>
                            <TableHead>Kategori</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="text-slate-600">
                        {data?.map((x, key) => {
                            return (
                                <TableRow key={key}>
                                    <TableCell className="font-medium">
                                        {x.name}
                                    </TableCell>
                                    <TableCell className="font-medium">
                                        {x.average_sensor_reading_mq135}
                                    </TableCell>
                                    <TableCell className="font-medium">
                                        {x.average_ppm}
                                    </TableCell>
                                    <TableCell className="font-medium">
                                        {x.average_temperature}
                                    </TableCell>
                                    <TableCell className="font-medium">
                                        {x.average_humidity}
                                    </TableCell>
                                    <TableCell>
                                        {x.category !== 'Data tidak cukup' ? (
                                            <Badge
                                                className={clsx(
                                                    'text-white uppercase',
                                                    getAirQualityClassNames(
                                                        x.category,
                                                    ),
                                                )}
                                            >
                                                {x.category}
                                            </Badge>
                                        ) : (
                                            <pre>Data tidak cukup</pre>
                                        )}
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </div>
        </WidgedCard>
    )
}

export default KualitasUdaraTerakhirWidged
