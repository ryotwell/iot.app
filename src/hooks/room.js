import axios from '@/lib/axios'
import useSWR from 'swr'

export const useRoom = () => {
    const { data, mutate } = useSWR('/api/room/current', (url) =>
        axios
            .get(url)
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !== 409) throw error

                router.push('/verify-email')
            }),
    )

    return { data, mutate }
}