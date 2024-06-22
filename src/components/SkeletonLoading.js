import { Skeleton } from './ui/skeleton'

function SkeletonLoading() {
    return (
        <div className="w-full space-y-2">
            <Skeleton className='h-24' />
            <div className='flex space-x-2'>
                <Skeleton className='h-6 w-2/6' />
                <Skeleton className='h-6 w-2/6' />
                <Skeleton className='h-6 w-2/6' />
                <Skeleton className='h-6 w-2/6' />
            </div>
        </div>
    )
}

export default SkeletonLoading