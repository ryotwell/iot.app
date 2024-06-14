import { useEffect, useState } from "react"
import WidgedCard from "../WidgedCard"
import { socket } from "@/lib/utils"
import TimeCounter from "../TimeCounter"

function LastDataWidged() {
    const [current, setCurrent] = useState({})
    const [loading, setLoading] = useState(true)

    const getCurrent = () => {
        setLoading(true)
        socket.emit('current')
    }

    socket.on('current', (data) => {
        setCurrent(data)
        setLoading(false)
    })

    useEffect(() => {
        getCurrent()
    }, [])

    return (
        <WidgedCard
            title="Data Terakhir Masuk"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            loading={loading}
            heightFull
        >
            <div className='flex justify-center items-center py-20'>
                <span className="animate-ping inline-flex h-2 w-2 rounded-full bg-sky-400 opacity-75 mr-2"></span>
                <span className="text-md font-semibold text-slate-950/50 dark:text-slate-100/50"><TimeCounter createdAt={current.created_at} /></span>
            </div>
        </WidgedCard>
    )
}

export default LastDataWidged