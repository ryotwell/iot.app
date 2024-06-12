import useSWR from 'swr'
import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { getFormattedTimeForError } from '@/lib/utils'
import { Loading } from 'notiflix/build/notiflix-loading-aio'

export const useAuth = ({ middleware, redirectIfAuthenticated } = {}) => {
    const router = useRouter()
    const params = useParams()

    const { data: user, error, mutate } = useSWR('/api/user', () =>
        axios
            .get('/api/user')
            .then(res => res.data)
            .catch(error => {
                if (error.response.status !== 409) throw error

                router.push('/verify-email')
            }),
    )

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const register = async ({ setErrors, ...props }) => {
        await csrf()

        setErrors([])

        axios
            .post('/register', props)
            .then(() => mutate())
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const login = async ({ setErrors, setStatus, ...props }) => {
        Loading.standard('Login...')

        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/login', props)
            .then(() => {
                mutate()
                Loading.remove()
                toast.success('Login successfully, You will be redirect...', {
                    description: getFormattedTimeForError(),
                    action: {
                        label: 'Close',
                        onClick: () => console.log('Closed'),
                    },
                })
            })
            .catch(error => {
                if (error.response.status !== 422) throw error

                const message = Object.values(error.response.data.errors)[0]

                toast.error(message, {
                    description: getFormattedTimeForError(),
                    action: {
                        label: 'Close',
                        onClick: () => console.log('Closed'),
                    },
                })

                Loading.remove()

                // setErrors(error.response.data.errors)
            })
    }

    const forgotPassword = async ({ setErrors, setStatus, email }) => {
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/forgot-password', { email })
            .then(response => setStatus(response.data.status))
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const resetPassword = async ({ setErrors, setStatus, ...props }) => {
        await csrf()

        setErrors([])
        setStatus(null)

        axios
            .post('/reset-password', { token: params.token, ...props })
            .then(response =>
                router.push('/login?reset=' + btoa(response.data.status)),
            )
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(error.response.data.errors)
            })
    }

    const resendEmailVerification = ({ setStatus }) => {
        axios
            .post('/email/verification-notification')
            .then(response => setStatus(response.data.status))
    }

    const logout = async () => {
        Loading.standard('Logout...')

        if (!error) {
            await axios.post('/logout').then(() => {
                mutate()
                toast('Logout successfully, You will be redirect...', {
                    className: 'text-green-500',
                    description: getFormattedTimeForError(),
                    action: {
                        label: 'Close',
                        onClick: () => console.log('Closed'),
                    },
                })
            })
        }

        window.location.pathname = '/login'
    }

    useEffect(() => {
        if (middleware === 'guest' && redirectIfAuthenticated && user)
            router.push(redirectIfAuthenticated)
        if (
            window.location.pathname === '/verify-email' &&
            user?.email_verified_at
        )
            router.push(redirectIfAuthenticated)
        if (middleware === 'auth' && error) logout()
    }, [user, error])

    return {
        user,
        register,
        login,
        forgotPassword,
        resetPassword,
        resendEmailVerification,
        logout,
        csrf,
    }
}
