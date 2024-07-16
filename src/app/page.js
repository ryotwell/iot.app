'use client'

import { ThemeToggle } from '@/components/ThemeToggle'
import GridPattern from '@/components/magicui/grid-pattern'
import ShimmerButton from '@/components/magicui/shimmer-button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { RocketIcon, MoveDown, Github, ArrowRightIcon } from 'lucide-react'
import Team from '@/components/Team'
import ApplicationLogo from '@/components/ApplicationLogo'
import clsx from 'clsx'
import Spotlight from '@/components/magicui/Spotlight'
import { TypewriterEffectSmooth } from '@/components/magicui/typewriter-effect'
import { FlipWords } from '@/components/magicui/flip-words'
import AnimatedShinyText from '@/components/magicui/animated-shiny-text'

export function AnimatedShinyTextComponent() {
    return (
        <div className="z-10 min-h-[4rem] flex items-center justify-center">
            <a
                className={cn(
                    'group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800',
                )}
                href="https://ryotwell.vercel.app/projects/sistem-monitoring-suhu-kelembapan-dan-gas-optimalisasi-lingkungan"
                rel="noopener noreferrer"
                target="_blank"
            >
                <AnimatedShinyText
                    className={clsx([
                        'inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400',
                        'text-sm lg:text-base',
                    ])}
                >
                    <span>✨ Introducing Optima</span>
                    <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedShinyText>
            </a>
        </div>
    )
}

const HeaderComponent = () => {
    return (
        <div className="flex justify-between content">
            <Link href="#!" className="inline-flex items-center">
                <ApplicationLogo className="block h-9 w-auto fill-current dark:text-slate-100/50 text-slate-800 mr-2" />
                <h1 className="ml-2 font-medium uppercase">Optima</h1>
            </Link>
            <ThemeToggle />
        </div>
    )
}

const FooterComponent = () => {
    return (
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
    )
}

const HeroComponent = () => {
    const words = [
        {
            text: 'Terintegrasi',
        },
        {
            text: 'dengan',
        },
        {
            text: 'whatsapp',
        },
    ]

    return (
        <div className="content h-screen">
            <div className="relative flex h-3/6 lg:h-full w-full items-center justify-center bg-background">
                <div className="z-10 w-full space-y-6">
                    <div className="flex justify-center">
                        <div>
                            <AnimatedShinyTextComponent />
                            <h1 className="text-center lg:max-w-4xl hero-section-title">
                                Monitoring
                                <br />
                                <FlipWords
                                    words={['Suhu,', 'Kelembapan,', 'Gas,']}
                                />
                                <br />
                                <span
                                    className={clsx([
                                        'bg-gradient-to-r from-purple-500 via-orange-400 to-green-300',
                                        'inline-block text-transparent bg-clip-text',
                                        'md:pb-2',
                                    ])}
                                >
                                    Optimasi Lingkungan
                                </span>
                            </h1>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <TypewriterEffectSmooth
                            words={words}
                            className="text-slate-950/50 dark:text-slate-100/50"
                            cursorClassName="h-6 md:h-6 lg:h-6 xl:h-6"
                        />
                    </div>
                    <div className="flex justify-center">
                        <ShimmerButton
                            className="w-full md:w-1/5"
                            background="#020617"
                            href="/login"
                        >
                            Get Started
                        </ShimmerButton>
                    </div>
                </div>
                <GridPattern
                    width={30}
                    height={30}
                    x={-1}
                    y={-1}
                    strokeDasharray={'4 2'}
                    className={cn(
                        '[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]',
                    )}
                />
            </div>
        </div>
    )
}

const MoveDownComponent = () => {
    return (
        <div className="absolute w-full md:hidden bottom-10">
            <div className="flex justify-center mb-4 text-slate-950/50 dark:text-slate-100/50 text-sm">
                Project Kelompok 2.
            </div>
            <div className="flex justify-center">
                <MoveDown
                    size={30}
                    className="text-purple-300 animate-bounce duration-1000"
                />
            </div>
        </div>
    )
}

function Home() {
    return (
        <>
            <Spotlight
                className={clsx([
                    '-top-40 left-0 md:left-60 md:-top-20',
                    'dark:block hidden',
                ])}
                fill="white"
            />

            <HeaderComponent />

            <HeroComponent />

            <MoveDownComponent />

            <div className="content space-y-4">
                <div className="flex justify-center">
                    <div className="rounded-md overflow-hidden p-4 bg-gradient-to-br from-purple-300 to-orange-300 group/icon">
                        <RocketIcon
                            size={40}
                            className="text-white group-hover/icon:scale-105 duration-300"
                        />
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="text-center lg:max-w-sm section-title">
                        <div>Anggota</div>
                        <div
                            className={clsx([
                                'bg-gradient-to-r from-purple-500 via-orange-400 to-green-300',
                                'inline-block text-transparent bg-clip-text',
                            ])}
                        >
                            Kelompok.
                        </div>
                    </div>
                </div>
                <div className="text-center text-slate-950/50 dark:text-slate-100/50">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </div>
                <div className="flex justify-center">
                    <div className="w-full lg:w-1/2">
                        <Team />
                    </div>
                </div>
            </div>

            <FooterComponent />
        </>
    )
}

export default Home
