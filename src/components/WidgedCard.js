import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

function WidgedCard({ title, children, description = false, loading = false, heightFull = false, ...props }) {
    return (
        <>
            {loading ? (
                <>
                    <Skeleton className='bg-white rounded-lg h-6' />
                    <Skeleton className='bg-white rounded-lg h-56' />
                </>
            ) : (
                <Card {...props}>
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
                    <CardContent className={ `flex justify-center items-center ${ heightFull && 'lg:h-2/3' }` }>
                        {children}
                    </CardContent>
                </Card>
            )}
        </>
    )
}

export default WidgedCard