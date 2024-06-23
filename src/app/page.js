'use client'

import ApplicationLogo from '@/components/ApplicationLogo'
import Team from '@/components/Team'
import { ThemeToggle } from '@/components/ThemeToggle'
import { useAuth } from '@/hooks/auth'
import Link from 'next/link'
import { useState } from 'react'
import { Github } from 'lucide-react'

function Home() {
    const { user } = useAuth({})
    const [isNavigation, setIsNavigation] = useState(false)

    const handleNavigationToggle = () => {
        setIsNavigation(!isNavigation)
    }

    return (
        <>
            <div
                className={`${isNavigation ? 'flex' : 'hidden'} w-full h-screen absolute justify-center backdrop-blur-md z-10`}
            >
                <div
                    className="w-full bg-white h-52 my-10 mx-4 p-4 rounded-xl"
                    style={{ marginTop: '45%' }}
                >
                    <div className="flex justify-end mb-4">
                        <button
                            onClick={handleNavigationToggle}
                            className="hover:bg-gray-100 p-2 transition duration-300 rounded-xl"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 text-slate-950/60"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18 18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul className="space-y-2">
                            <li className="bg-gray-100 hover:bg-blue-500 duration-300 hover:text-slate-100 rounded-xl p-4 text-sm text-slate-950/60">
                                Home
                            </li>
                            <li className="bg-gray-100 hover:bg-blue-500 duration-300 hover:text-slate-100 rounded-xl p-4 text-sm text-slate-950/60">
                                Login
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={isNavigation ? 'fixed' : 'block'}>
                <div className="flex justify-between items-center p-8">
                    <div className="uppercase font-bold flex justify-center items-center">
                        <ApplicationLogo className="block h-9 w-auto fill-current dark:text-slate-300 text-gray-800 mr-2" />
                        Lets Try
                    </div>
                    <div className="block lg:hidden">
                        <ThemeToggle />
                    </div>
                    <ul className="hidden lg:flex space-x-2 items-center">
                        <li>
                            <Link
                                className="text-slate-900/60 dark:text-slate-300 hover:bg-blue-500 hover:text-slate-100 duration-300 px-4 py-2 rounded-lg text-sm"
                                href="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            {user?.email ? (
                                <Link
                                    className="text-slate-900/60 dark:text-slate-300 hover:bg-blue-500 hover:text-slate-100 duration-300 px-4 py-2 rounded-lg text-sm"
                                    href="/dashboard"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <Link
                                    className="text-slate-900/60 dark:text-slate-300 hover:bg-blue-500 hover:text-slate-100 duration-300 px-4 py-2 rounded-lg text-sm"
                                    href="/login"
                                >
                                    Login
                                </Link>
                            )}
                        </li>
                        <li>
                            <ThemeToggle />
                        </li>
                    </ul>
                </div>
                <div className="block lg:flex lg:h-screen p-10 lg:px-32">
                    <div className="w-full lg:w-1/2 flex justify-center items-center">
                        <div>
                            <div>
                                <h1 className="text-2xl lg:text-4xl font-bold tracking-tight dark:text-slate-300 text-gray-900 uppercase mr-2">
                                    Monitoring Suhu Kelembapan dan Gas untuk
                                    Optimasi
                                </h1>
                                <h1 className="mt-2 inline-block -rotate-1 rounded-xl bg-gradient-to-r from-background via-background to-background px-4 py-1.5 text-lg tracking-tight text-foreground ring-2 sm:px-4 sm:py-3 sm:text-3xl lg:text-4xl shadow-2xl ring-purple-500 text-purple-500">
                                    Lingkungan
                                </h1>
                            </div>
                            <p className="max-w-sm my-6 dark:text-slate-300/60 text-slate-900/60">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Omnis deserunt autem in
                                pariatur labore praesentium modi aperiam cum
                                dolor libero.
                            </p>
                            <Link
                                href="/login"
                                className="py-3 px-14 text-slate-100 rounded-full inline-flex bg-gradient-to-r from-pink-600 to-blue-600"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                                    />
                                </svg>
                                <span className="ml-2">Get Started</span>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center items-center">
                        <img src="/hero.png" alt="" />
                    </div>
                </div>

                <div className="text-center px-10 py-16 flex justify-center">
                    <div>
                        <h2 className="text-4xl font-bold tracking-tight dark:text-slate-300 text-gray-900">
                            Monitoring Secara
                            <br />
                            Real Time.
                        </h2>
                        <p className="my-4 text-slate-950/60 dark:text-slate-300/60">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Totam, necessitatibus.
                        </p>
                        <Link
                            href="/login"
                            className="py-3 px-14 text-slate-100 rounded-full inline-flex bg-gradient-to-r from-pink-600 to-blue-600"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                                />
                            </svg>
                            <span className="ml-2">Get Started</span>
                        </Link>
                    </div>
                </div>

                <div className="text-center px-10 py-16 flex justify-center">
                    <div className="w-full">
                        <h2 className="text-4xl font-bold tracking-tight dark:text-slate-300 text-gray-900">
                            Anggota
                            <br />
                            Kelompok.
                        </h2>
                        <p className="my-4 text-slate-950/60 dark:text-slate-300/60">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Tenetur, blanditiis.
                        </p>
                        <div className="flex justify-center">
                            <div className="w-full lg:w-1/2">
                                <Team />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-10 text-sm text-center px-10 flex justify-center">
                    <a
                        className="inline-flex items-center underline text-slate-950/50 hover:text-slate-950/70 dark:text-slate-100/50 dark:hover:text-slate-100/70 duration-300"
                        href="https://github.com/ryotwell/iot.app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Github size={15} className="mr-2" />
                        {'ryotwell/iot.app'}
                    </a>
                </div>
            </div>
        </>
    )
}

export default Home
