import { Skeleton } from '@/components/ui/skeleton'

function WidgedCard({ title, children, lgmax = true, contentClassName = 'justify-center items-center', loading = false }) {
    return (
        <div className={`rounded-lg p-4 bg-white dark:bg-slate-900 text-gray-900 bg-gradient-to-br ${lgmax ? 'max-h-80' : ''}`}>
            <div className="mb-4">
                {loading ? (
                    <Skeleton className='h-8 w-1/2 rounded-lg' />
                ) : (
                    <h1 className="text-black dark:text-slate-300">{title}</h1>
                )}
            </div>
            <div className={`flex ${contentClassName}`}>
                {children}
            </div>
        </div>
    )
}

export default WidgedCard