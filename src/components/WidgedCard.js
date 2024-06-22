import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

function WidgedCard({ title, children, className = '', description = false, loading = false, right = false }) {
    return (
        loading ? (
            <Skeleton className={`bg-white dark:bg-slate-900 w-full h-56 ${right ? 'h-full' : 'h-56'}`} />
        ) : (
            <Card className="h-full">
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
        )
    )
}

export default WidgedCard