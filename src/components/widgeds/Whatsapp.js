import * as React from 'react'
import clsx from 'clsx'
import { socket } from '@/lib/utils'
import { toDataURL } from 'qrcode'

import WidgedCard from '../WidgedCard'
import { Badge } from '../ui/badge'

const StatusComponent = ({ value }) => {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <Badge>{value}</Badge>
        </div>
    )
}

function WhatsappWidged() {
    const [qrcode, setQrcode] = React.useState('')
    const [status, setStatus] = React.useState(false)

    React.useEffect(() => {
        socket.on('qrcode_update', async ({ qr = null, status = false }) => {
            if (qr) {
                const toURL = await toDataURL(qr)
                setQrcode(toURL)
            }

            setStatus(status)
        })

        socket.emit('whatsapp_session_status')

        return () => socket.off('qrcode_update')
    }, [])

    return (
        <WidgedCard
            title="Whatsapp"
            description="Lorem ipsum dolor sit amet consectetur."
            className={clsx([
                'h-60',
                (status === false && !qrcode) || (status && 'lg:h-1/2'),
            ])}
        >
            {!status ? (
                qrcode ? (
                    <img src={qrcode} style={{ height: '300px' }} />
                ) : (
                    <StatusComponent value="connecting" />
                )
            ) : (
                <StatusComponent value="connected" />
            )}
        </WidgedCard>
    )
}

export default WhatsappWidged
