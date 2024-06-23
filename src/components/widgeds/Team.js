import Team from '../Team'
import WidgedCard from '../WidgedCard'

function TeamWidged() {
    return (
        <WidgedCard
            title="Anggota Kelompok"
            description="Daftar atau informasi mengenai anggota kelompok yang terlibat dalam project."
        >
            <Team />
        </WidgedCard>
    )
}

export default TeamWidged
