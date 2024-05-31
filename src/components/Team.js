import TeamCard from './TeamCard'

function Team() {
    return (
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            <li>
                <TeamCard
                    name='Zulzario Zaeri'
                    photo="/team/rand.webp"
                />
            </li>
            <li>
                <TeamCard
                    name='Taufix Hidayat'
                    photo="/team/noprofile.jpg"
                />
            </li>
            <li>
                <TeamCard
                    name='Dwi Hartila'
                    photo="/team/noprofile.jpg"
                />
            </li>
            <li>
                <TeamCard
                    name='ChatGPT'
                    photo="/team/chatgpt.jpg"

                />
            </li>
        </ul>
    )
}

export default Team