const Team = ({ name, photo = null, nim = null }) => {
    return (
        <>
            <img
                className="mx-auto h-20 w-20 shadow border dark:border-none rounded-full lg:h-24 lg:w-24"
                src={ photo ? photo : 'https://i.pinimg.com/236x/56/2e/be/562ebed9cd49b9a09baa35eddfe86b00.jpg'}
            />
            <div className="space-y-2 mt-4">
                <div className="text-sm font-medium lg:text-sm text-center">
                    <h3 className="text-purple-700 dark:text-purple-500">{name}</h3>
                    {nim && (
                        <h3 className="text-xs text-slate-950/50">
                            {`(${nim})`}
                        </h3>
                    )}
                </div>
            </div>
        </>
    )
}

function TeamCard({ url = null, ...props }) {
    return (
        <div className="space-y-4">
            {url ? (
                <a href={ url } target="_blank" rel="noopener noreferrer">
                    <Team {...props} />
                </a>
            ) : (
                <a href="#!">
                    <Team {...props} />
                </a>
            )}
        </div>
    )
}

export default TeamCard