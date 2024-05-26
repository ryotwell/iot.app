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