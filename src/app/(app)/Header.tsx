import * as React from 'react'

interface HeaderProps {
    title?: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header className="bg-white dark:bg-slate-900 shadow">
            <div className="mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h2 className="font-semibold text-xl text-gray-800 dark:text-white leading-tight">
                    {title}
                </h2>
            </div>
        </header>
    )
}

export default Header
