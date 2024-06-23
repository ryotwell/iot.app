import { Switch } from '@/components/ui/switch'
import WidgedCard from '../WidgedCard'
import { useAuth } from '@/hooks/auth'
import { Button } from '../ui/button'
import { useEffect, useState } from 'react'
import axios from '@/lib/axios'
import { getFormattedTimeForError } from '@/lib/utils'
import { toast } from 'sonner'

function SettingsWidged() {
    const { user, mutate } = useAuth({ middleware: 'auth' })

    const [setting, setSetting] = useState({
        dht_11_real_time_notification: true,
    })
    const [submit, setSubmit] = useState(false)

    const handler = e => {
        const values = { ...setting }

        values[e.target.id] = e.target.value === 'on' ? false : true

        setSetting({ ...values })
    }

    const handleOnSave = () => {
        setSubmit(true)
        axios.post('/api/user/setting', { ...setting }).then(() => {
            setSubmit(false)
            toast.success(
                'Update berhasil, lalukan refresh pada browser untuk menerapkan perubahan pada browser.',
                {
                    description: getFormattedTimeForError(),
                    action: {
                        label: 'Refresh',
                        onClick: () => (window.location.href = '/dashboard'),
                    },
                },
            )

            mutate()
        })
    }

    useEffect(() => {
        setSetting({
            dht_11_real_time_notification:
                user.setting.dht_11_real_time_notification,
        })
    }, [])

    return (
        <WidgedCard
            title="Pengaturan"
            description="Ada beberapa pengaturan yang tersedia."
        >
            <div className="w-full">
                <div className="mb-4">
                    <h3 className="font-semibold text-lg mb-4">
                        In App Notifications
                    </h3>
                    <div className="flex p-4 lg:p-8 rounded-md border border-1">
                        <div className="w-full">
                            <div className="font-semibold mb-2">Data Baru</div>
                            <div className="text-sm text-slate-950/50">
                                {
                                    'Notifikasi secara real-time setiap ada data baru yang masuk'
                                }
                            </div>
                        </div>
                        <div className="flex items-center justify-center px-4">
                            <Switch
                                id="dht_11_real_time_notification"
                                checked={setting.dht_11_real_time_notification}
                                value={
                                    setting.dht_11_real_time_notification
                                        ? 'on'
                                        : 'off'
                                }
                                disabled={submit}
                                onClick={handler}
                            />
                        </div>
                    </div>
                </div>
                {/* <div className="mb-4">
                    <h3 className="font-semibold text-lg mb-4">Whatsapp Notifications</h3>
                    <div className="flex p-4 lg:p-8 rounded-md border border-1">
                        <div className="w-full">
                            <div className="font-semibold mb-2">
                                Kualitas udara buruk
                            </div>
                            <div className="text-sm text-slate-950/50">
                                { 'Notifikasi di kirim ke whatsapp secara real-time jika udara tidak sehat/buruk' } 
                            </div>
                        </div>
                        <div className="flex items-center justify-center px-4">
                            <Switch
                                id="dht_11_real_time_notification"
                                checked={setting.dht_11_real_time_notification}
                                value={setting.dht_11_real_time_notification ? 'on' : 'off'}
                                disabled={submit}
                                onClick={handler}
                            />
                        </div>
                    </div>
                </div> */}

                <Button onClick={handleOnSave} disabled={submit}>
                    Save
                </Button>
            </div>
        </WidgedCard>
    )
}

export default SettingsWidged
