import WidgedCard from "../WidgedCard"
import TimeCounter from "../TimeCounter"

function LastDataWidged({ current, loading }) {
    return (
        <WidgedCard
            title="Data Terakhir Masuk"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            loading={loading}
            heightFull
        >
            <div className='flex justify-center items-center py-20'>
                <span className="animate-ping inline-flex h-2 w-2 rounded-full bg-sky-400 opacity-75 mr-2"></span>
                <span className="text-md font-semibold text-slate-950/50 dark:text-slate-100/50"><TimeCounter createdAt={current.created_at} /></span>
            </div>
        </WidgedCard>
    )
}

export default LastDataWidged