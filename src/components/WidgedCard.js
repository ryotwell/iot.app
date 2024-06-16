import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

function WidgedCard({ title, children, className = '', description = false, loading = false, heightFull = false }) {
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
                    <CardContent className={ `flex justify-center items-center ${className}` }>
                        {children}
                    </CardContent>
                </Card>
            )}
        </>
    )
}

export default WidgedCard