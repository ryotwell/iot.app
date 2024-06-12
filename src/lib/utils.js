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

export const ryotwell = {
    name: 'Ryo Otwell',
    github: 'https://github.com/ryotwell',
    webprofile: 'https://zulzario.vercel.app/'
}