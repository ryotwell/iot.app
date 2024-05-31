function TeamCard({ name, photo ='' }) {
    return (
        <div className="space-y-4">
            <img
                className="mx-auto h-20 w-20 shadow border dark:border-none rounded-full lg:h-24 lg:w-24"
                src={ photo ? photo : 'https://i.pinimg.com/236x/56/2e/be/562ebed9cd49b9a09baa35eddfe86b00.jpg'}
            />
            <div className="space-y-2">
                <div className="text-sm font-medium lg:text-sm text-center">
                    <h3 className="text-purple-700 dark:text-purple-500">{name}</h3>
                </div>
            </div>
        </div>
    )
}

export default TeamCard