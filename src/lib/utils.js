import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { io } from 'socket.io-client'
import moment from 'moment-timezone'

export function cn(...inputs) {
    return twMerge(clsx(inputs))
}

export function getFormattedTimeForError() {
    const timezone = 'Asia/Makassar'
    const currentTime = moment.tz(timezone)
    
    return currentTime.format('dddd, MMMM DD, YYYY [at] hh:mm A')
}

export const getAirQualityClassNames = (category) => {
    if( category === 'Baik' ) return 'bg-green-500 hover:bg-green-400'
    if( category === 'Normal' ) return 'bg-green-500 hover:bg-green-400'
    if( category === 'Buruk' ) return 'bg-red-500 hover:bg-red-400'

    return ''
}

export const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL, {
    transports: ['websocket']
})

export const randomBoolean = () => Math.random() >= 0.5

export const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

export const randomFloatInRange = (min, max) => Math.random() * (max - min) + min

export const getFirstFourDigits = (integer) => parseFloat(integer.toFixed(2))

export const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds))

export const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600)
    const remainingSeconds = seconds % 3600
    const minutes = Math.floor(remainingSeconds / 60)
    const remainingSecondsOnly = remainingSeconds % 60

    if (hours > 0) {
        return `${hours} jam, ${minutes} menit, ${remainingSecondsOnly} detik yang lalu`
    } else if (minutes > 0) {
        return `${minutes} menit, ${remainingSecondsOnly} detik yang lalu`
    } else {
        return `${remainingSecondsOnly} detik yang lalu`
    }
}

export const ryotwell = {
    name: 'Ryo Otwell',
    github: 'https://github.com/ryotwell',
    webprofile: 'https://zulzario.vercel.app/'
}

// export const getAirQualityByPPM = (ppm) => {
//     if (ppm < 100) {
//         return "Baik"
//     } else if (ppm >= 100 && ppm < 300) {
//         return "Normal"
//     }

//     return "Buruk"
// }

// export const calculatePPM = (sensorValue, R0 = 30) => {
//     const VRL = (sensorValue / 1023.0) * 5.0    // Calculate sensor voltage
//     const RS_air = 10.0 * ((5.0 / VRL) - 1.0)   // Calculate sensor resistance in clean air
//     const ratio = RS_air / R0                   // Calculate the current ratio
//     const ppm = 613.9 * Math.pow(ratio, -2.074) // Calculate PPM

//     return getFirstFourDigits(ppm)
// }