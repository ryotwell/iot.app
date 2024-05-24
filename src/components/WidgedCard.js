function WidgedCard({ title, children }) {
    return (
        <div className='rounded-lg p-4 bg-white text-gray-900 bg-gradient-to-br'>
            <div className='w-full'>
                <h1>{title}</h1>

                {children}
            </div>
        </div>
    );
}

export default WidgedCard;