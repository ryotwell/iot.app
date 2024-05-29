import { getAirQualityClassNames } from "@/lib/utils"
import WidgedCard from "../WidgedCard"

function KualitasUdaraWidget({ data }) {
    return (
        <WidgedCard title='Kualitas Udara' contentClassName='justify-center items-center h-60'>
            <div className='text-center'>
                <span className={'py-3 px-8 rounded-full uppercase font-semibold text-slate-100 '+ getAirQualityClassNames(data?.category)}>{data?.category}</span>
                <h1 className='mt-4 text-xs dark:text-slate-300'>
                    {data?.diff_for_humans}
                </h1>
            </div>
        </WidgedCard>
    )
}

export default KualitasUdaraWidget