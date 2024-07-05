'use client'

import * as React from 'react'
import { useAuth } from '@/hooks/auth'
import Navigation from '@/app/(app)/Navigation'
import Loading from '@/app/(app)/Loading'

interface LayoutProps {
    children: React.ReactNode
}

const AppLayout: React.FC<LayoutProps> = ({ children }) => {
    const { user } = useAuth({ middleware: 'auth' })

    if (!user) {
        return <Loading />
    }

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-slate-950">
            <Navigation user={user} />

            <main>{children}</main>
        </div>
    )
}

export default AppLayout
