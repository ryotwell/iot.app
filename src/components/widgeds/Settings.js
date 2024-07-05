import { Switch } from '@/components/ui/switch'
import WidgedCard from '../WidgedCard'
import { useAuth } from '@/hooks/auth'
import { Button } from '../ui/button'
import { useEffect, useState } from 'react'
import axios from '@/lib/axios'
import { getCurrentTime } from '@/lib/utils'
import { toast } from 'sonner'

const SwitchComponent = ({
    handler,
    submit,
    label,
    value,
    id,
    description,
    disabled = false,
}) => {
    return (
        <div className="flex p-4 lg:p-8 rounded-md border border-1">
            <div className="w-full">
                <div className="font-semibold mb-2">{label}</div>
                <div className="text-sm text-slate-950/50 dark:text-slate-100/50">
                    {description}
                </div>
            </div>
            <div className="flex items-center justify-center px-4">
                <Switch
                    id={id}
                    checked={value}
                    value={value ? 'on' : 'off'}
                    disabled={disabled ? disabled : submit}
                    onClick={handler}
                />
            </div>
        </div>
    )
}

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
            toast.success('Updated successfully..', {
                description: getCurrentTime(),
                action: {
                    label: 'Refresh',
                    onClick: () => console.log('closed'),
                },
            })

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
                    <div>
                        <SwitchComponent
                            {...{
                                submit,
                                handler,
                                id: 'dht_11_real_time_notification',
                                label: 'Data Baru',
                                description:
                                    'Notifikasi secara real-time setiap ada data baru yang masuk.',
                                value: setting.dht_11_real_time_notification,
                            }}
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <h3 className="font-semibold text-lg mb-4">
                        Whatsapp Notifications
                    </h3>
                    <div>
                        <SwitchComponent
                            {...{
                                submit,
                                handler,
                                id: 'whatsapp_danger_notification',
                                label: 'Kualitas udara buruk',
                                description:
                                    'Notifikasi di kirim ke whatsapp secara real-time jika udara tidak sehat/buruk.',
                                value: true,
                                disabled: true,
                            }}
                        />
                    </div>
                </div>

                <Button onClick={handleOnSave} disabled={submit}>
                    Save
                </Button>
            </div>
        </WidgedCard>
    )
}

export default SettingsWidged
