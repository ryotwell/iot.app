import * as React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { ThemeToggle } from './ThemeToggle'

function ImportantAlerts({ current }) {
    const [warning, setWarning] = React.useState(false)

    React.useEffect(() => {
        if( current.category === 'Buruk' ) {
            setWarning(true)
        } else {
            setWarning(false)
        }
    }, [current])

    return (
        <>
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

            <div className='bottom-0 right-0 fixed m-6 lg:hidden z-10'>
                <ThemeToggle className="rounded-full" />
            </div>
        </>
    )
}

export default ImportantAlerts