function WidgedCard({ title, children, lgmax = true }) {
    return (
        <div className={`rounded-lg p-4 bg-white text-gray-900 bg-gradient-to-br ${lgmax ? 'max-h-80' : ''}`}>
            <div className="mb-4">
                <h1>{title}</h1>
            </div>
            <div className="flex justify-center items-center">
                {children}
            </div>
        </div>
    )
}

export default WidgedCard