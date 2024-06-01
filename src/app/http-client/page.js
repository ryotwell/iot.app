'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import axios from '@/lib/axios'
import { getFirstFourDigits, randomFloatInRange, sleep } from '@/lib/utils'
import { Loading } from 'notiflix'
import { useState } from 'react'
import { Toaster } from '@/components/ui/sonner'
import { toast } from 'sonner'
import { useAuth } from '@/hooks/auth'

export const httpClient = {
    url: 'https://ryodev.my.id/api/room',
    method: 'POST',
}

function TestRequest() {
    const [ data, setData ] = useState({ temperature: getFirstFourDigits(randomFloatInRange(10, 40)), humidity: getFirstFourDigits(randomFloatInRange(20, 90)) })

    const { csrf } = useAuth({ middleware: '' })

    const handleGenerate = () => {
        setData({
            temperature: getFirstFourDigits(randomFloatInRange(10, 40)),
            humidity: getFirstFourDigits(randomFloatInRange(20, 90))
        })
    }

    const handleSubmit = async () => {
        Loading.standard('Mengirim data ke server...')

        await csrf()

        try {
            await axios.post('/api/room', {
                temperature: data.temperature,
                humidity: data.humidity,
            })
    
            toast('Data berhasil dikirim ke server!', {
                action: {
                    label: 'Close',
                    onClick: () => console.log('Closed'),
                },
            })
        } catch (e) {
            console.log(e)

            toast.error('Something went wrong!', {
                action: {
                    label: 'Close',
                    onClick: () => console.log('Closed'),
                },
            })
        }

        Loading.remove()
    }

    return (
        <div className="p-8 flex justify-center items-center h-screen">
            <Toaster richColors position="top-left" />
            <Card className="w-full lg:w-1/3">
                <CardHeader>
                    <CardTitle>
                        Http Client Online
                    </CardTitle>
                    <CardDescription>
                        Ini di gunakan untuk melakukan testing pada API.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="mb-4 flex">
                        <Button variant='outline' className="mr-2" readOnly>
                            {httpClient.method}
                        </Button>
                        <Input value={httpClient.url} readOnly />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="">{ 'Temperature (0 - 50)' }</label>
                        <Input onChange={(e) => setData({ ...data, temperature: e.target.value })} value={data.temperature} className="mt-2" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="">{ 'Humidity (0 - 100)' }</label>
                        <Input onChange={(e) => setData({ ...data, humidity: e.target.value })} value={data.humidity} className="mt-2" />
                    </div>
                    <div className="flex justify-end space-x-4">
                        <Button onClick={handleGenerate}>
                            Generate
                        </Button>
                        <Button onClick={handleSubmit}>
                            Kirim
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default TestRequest