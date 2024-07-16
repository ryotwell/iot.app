import { cn } from '@/lib/utils'

const SubTitle = ({ children, className, ...props }) => {
    return (
        <h3
            className={cn([
                'text-xs text-blue-500/80 dark:text-blue-500/60',
                className,
            ])}
            {...props}
        >
            {children}
        </h3>
    )
}

const PeopleCard = ({ name, photo = null, nim = null, role = null }) => {
    return (
        <div className="group/card">
            <img
                className="mx-auto h-20 w-20 shadow border dark:border-none rounded-full lg:h-24 lg:w-24"
                src={
                    photo
                        ? photo
                        : 'https://i.pinimg.com/236x/56/2e/be/562ebed9cd49b9a09baa35eddfe86b00.jpg'
                }
            />
            <div className="space-y-2 mt-4">
                <div className="text-sm font-medium lg:text-sm text-center">
                    <h3 className="text-slate-950/50 dark:text-slate-100/50">
                        {name}
                    </h3>
                    {nim ? (
                        <>
                            <SubTitle className="group-hover/card:hidden">
                                {`(${nim})`}
                            </SubTitle>
                            <SubTitle className="hidden group-hover/card:block duration-500 animate-in fade-in">
                                {role}
                            </SubTitle>
                        </>
                    ) : (
                        <h3 className="text-xs text-blue-500/80 dark:text-blue-500/60">
                            -
                        </h3>
                    )}
                </div>
            </div>
        </div>
    )
}

function TeamCard({ url = null, ...props }) {
    return (
        <div className="space-y-4">
            {url ? (
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <PeopleCard {...props} />
                </a>
            ) : (
                <a href="#!">
                    <PeopleCard {...props} />
                </a>
            )}
        </div>
    )
}

export default TeamCard
