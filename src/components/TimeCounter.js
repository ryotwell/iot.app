import { formatTime } from '@/lib/utils'
import { useEffect, useState } from 'react'

function TimeCounter({ createdAt }) {
    const [elapsedTime, setElapsedTime] = useState(0)
    const [previousCreatedAt, setPreviousCreatedAt] = useState(null)

    useEffect(() => {
        if (createdAt !== previousCreatedAt) {
            setElapsedTime(0) // Reset ulang hitungan waktu
            setPreviousCreatedAt(createdAt)
        }

        const interval = setInterval(() => {
            const currentTime = new Date()
            const createdAtTime = new Date(createdAt)
            const differenceInSeconds = Math.floor(
                (currentTime - createdAtTime) / 1000,
            )
            setElapsedTime(differenceInSeconds)
        }, 1000) // Update setiap detik

        return () => clearInterval(interval)
    }, [createdAt, previousCreatedAt])

    return formatTime(elapsedTime)
}

export default TimeCounter
