function KualitasUdaraWidget({ data }) {
    return (
        <div className='text-center'>
            <span className='py-3 px-8 bg-green-500 text-slate-100 rounded-full uppercase font-semibold'>{data?.category}</span>
            <h1 className='mt-4 text-xs dark:text-slate-300'>
                {data?.diff_for_humans}
            </h1>
        </div>
    )
}

export default KualitasUdaraWidget