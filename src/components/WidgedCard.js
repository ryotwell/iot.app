import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

function WidgedCard({ title, children, description = false, loading = false }) {
    return (
        <>
            {loading ? (
                <>
                    <Skeleton className='bg-white rounded-lg h-6' />
                    <Skeleton className='bg-white rounded-lg h-56' />
                </>
            ) : (
                <Card>
                    {(title || description) && (
                        <CardHeader>
                            {title && (
                                <CardTitle>{title}</CardTitle>
                            )}
                            {description && (
                                <CardDescription>
                                    {description}
                                </CardDescription>
                            )}
                        </CardHeader>
                    )}
                    <CardContent>
                        <div className='flex justify-center items-center'>
                            {children}
                        </div>
                    </CardContent>
                </Card>
            )}
        </>
    )
}

export default WidgedCard