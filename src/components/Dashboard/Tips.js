import { ryotwell } from '@/lib/utils'

import Link from 'next/link'
import { Button } from '../ui/button'
import { ThemeToggle } from '../ThemeToggle'
import { ArrowRight, Info } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '../ui/alert'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export const ThemeTips = () => {
    return (
        <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Tips!</AlertTitle>
            <AlertDescription className="flex items-center justify-between">
                <div className="text-slate-950/50 dark:text-slate-100/50 mr-2">
                    Terlalu terang? anda bisa menggunakan tema darkmode.
                </div>
                <div>
                    <ThemeToggle />
                </div>
            </AlertDescription>
        </Alert>
    )
}

export const HttpClientnOnlineTips = () => {
    return (
        <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Tips!</AlertTitle>
            <AlertDescription className="flex items-center justify-between">
                <div className="text-slate-950/50 dark:text-slate-100/50 mr-2">
                    Anda bisa menggunakan{' '}
                    <Link href="/http-client">Http Client Online</Link> untuk
                    melakukan testing pada aplikasi.
                </div>
                <div>
                    <Button asChild size="icon">
                        <a
                            href="/http-client"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ArrowRight />
                        </a>
                    </Button>
                </div>
            </AlertDescription>
        </Alert>
    )
}

export const UserTips = ({ user }) => {
    return (
        <div className="flex space-x-4">
            <Avatar>
                <AvatarImage src="/team/noprofile.jpg" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
                <a
                    className="text-sm hover:text-purple-500 duration-300"
                    href={ryotwell.webprofile}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {user?.name}
                </a>
                <div className="text-xs text-slate-900/50 dark:text-slate-100/50">
                    {user?.email}
                </div>
            </div>
        </div>
    )
}
