'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { getFirstFourDigits, randomFloatInRange, sleep } from '@/lib/utils'
import { Loading } from 'notiflix'
import { useState } from 'react'

export const httpClient = {
    url: 'https://ryodev.my.id/api/room',
    method: 'POST',
}

function TestRequest() {
    const [ data, setData ] = useState({ temperature: 0, humidity: 0 })

    const handleGenerate = () => {
        setData({
            temperature: getFirstFourDigits(randomFloatInRange(10, 40)),
            humidity: getFirstFourDigits(randomFloatInRange(20, 90))
        })
    }

    const handleSubmit = async () => {
        Loading.standard('Mengirim data ke server...')

        await sleep(2000)

        Loading.remove()
    }

    return (
        <div className="p-8 flex justify-center items-center h-screen">
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
                        <label htmlFor="">{ 'Temperature (Temperatur)' }</label>
                        <Input defaultValue={data.temperature} className="mt-2" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="">{ 'Humidity (Kelembapan)' }</label>
                        <Input defaultValue={data.humidity} className="mt-2" />
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