import { ThemeToggle } from '@/components/ThemeToggle'
import GridPattern from '@/components/magicui/grid-pattern'
import ShimmerButton from '@/components/magicui/shimmer-button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { RocketIcon, MoveDown, Github } from 'lucide-react'
import Team from '@/components/Team'
import ApplicationLogo from '@/components/ApplicationLogo'
import clsx from 'clsx'
import Spotlight from '@/components/magicui/Spotlight'
import { TypewriterEffectSmooth } from '@/components/magicui/typewriter-effect'
import { FlipWords } from '@/components/magicui/flip-words'

const HeaderComponent = () => {
    return (
        <div className="flex justify-between content">
            <Link href="#!" className="inline-flex items-center">
                <ApplicationLogo className="block h-9 w-auto fill-current dark:text-slate-100/50 text-slate-800 mr-2" />
                <h1 className="ml-2">Letstry</h1>
            </Link>
            <ThemeToggle />
        </div>
    )
}

// const ButtonComponent = () => {
//     return (
//         <Link href="#!" className="bg-gradient-to-r from-purple-400 via-orange-400 to-pink-300 flex justify-center w-full lg:w-1/5 py-3 rounded-md text-white hover:scale-105 duration-300">
//             Login
//         </Link>
//     )
// }

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
            text: 'chat',
        },
        {
            text: 'code',
        },
        {
            text: 'cloud',
        },
        {
            text: 'deployments',
        },
        {
            text: 'and',
        },
        {
            text: 'more',
        },
    ]

    return (
        <div className="content h-screen">
            <div className="relative flex h-3/6 lg:h-full w-full items-center justify-center bg-background">
                <div className="z-10 w-full space-y-6">
                    <div className="flex justify-center">
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
        <div className="absolute w-full top-full md:hidden">
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
    // return (
    //     <div className='relative'>
    //         <div>
    //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, corrupti.
    //         </div>
    //         <div className='absolute h-full w-full top-0'>
    //             <GlowingStarsBackgroundCard/>
    //         </div>
    //     </div>
    // )

    return (
        <>
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
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
