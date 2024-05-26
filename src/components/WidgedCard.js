function WidgedCard({ title, children, lgmax = true }) {
    return (
        <div className={`rounded-lg p-4 bg-white dark:bg-slate-900 text-gray-900 bg-gradient-to-br ${lgmax ? 'max-h-80' : ''}`}>
            <div className="mb-4">
                <h1 className="text-black dark:text-slate-300">{title}</h1>
            </div>
            <div className="flex justify-center items-center">
                {children}
            </div>
        </div>
    )
}

export default WidgedCard