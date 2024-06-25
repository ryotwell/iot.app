import { Loading } from 'notiflix'

export const exportToExcel = ({ activeOption, withLoading = false }) => {
    if (withLoading === true) Loading.standard('Export ...')

    const url = getFullDownloadURL(activeOption)

    window.open(url, '_blank')

    if (withLoading === true) Loading.remove()
}

export const getFullDownloadURL = activeOption => {
    const laravel_url = process.env.NEXT_PUBLIC_BACKEND_URL

    return `${laravel_url}/api/room/export?for=${activeOption}`
}
