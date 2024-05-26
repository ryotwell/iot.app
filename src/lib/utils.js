import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
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
    if( category === 'good' ) return 'bg-green-500 hover:bg-green-400'
    if( category === 'normal' ) return 'bg-green-500 hover:bg-green-400'
    
    return 'bg-red-500 hover:bg-red-400'
}