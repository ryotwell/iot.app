import TeamCard from './TeamCard'
import { teams } from '@/lib/team'

function Team() {
    return (
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {teams.map(({ ...props }, key) => {
                return (
                    <li key={key}>
                        <TeamCard {...props} />
                    </li>
                )
            })}
        </ul>
    )
}

export default Team
