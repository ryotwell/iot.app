import axios from '@/lib/axios'
import useSWR from 'swr'

export const useRoom = () => {
    const { data, mutate } = useSWR('/api/room/current', (url) =>
        axios
            .get(url)
            .then(res => res.data),
    )

    return { data, mutate }
}