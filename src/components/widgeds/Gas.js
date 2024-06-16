import React, { useEffect, useState } from 'react'
import Tank from '../Tank'
import WidgedCard from '../WidgedCard'
import { calculatePPM, getAirQualityByPPM } from '@/lib/utils'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
  

function GasWidged({ current, loading }) {
    const [warning, setWarning] = useState(false)

    useEffect(() => {
        if( getAirQualityByPPM(calculatePPM(current.sensor_reading_mq135)) === 'Buruk' ) {
            setWarning(true)
        } else {
            setWarning(false)
        }
    }, [current])

    return (
        <WidgedCard
            title="Gas"
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
            loading={loading}
        >
            <div>
                <Dialog open={warning}>
                    <DialogContent>
                        <DialogHeader>
                        <DialogTitle className="text-red-500">Peringatan Udara Buruk!</DialogTitle>
                        <DialogDescription className="text-red-500/70">
                            { `"Peringatan Kualitas Udara: PPM telah mencapai tingkat yang mengkhawatirkan. Disarankan untuk menghindari kegiatan di luar ruangan dan membatasi aktivitas fisik yang intens. Pastikan untuk menggunakan alat pelindung pernapasan` }
                        </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>

                <Tank
                    max={400}
                    value={current.sensor_reading_mq135}
                />
                <div className='flex justify-center mt-4'>
                    PPM : {calculatePPM(current.sensor_reading_mq135)} {getAirQualityByPPM(calculatePPM(current.sensor_reading_mq135))}
                </div>
            </div>
        </WidgedCard>
    )
}

export default GasWidged