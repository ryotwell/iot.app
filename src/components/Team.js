import TeamCard from './TeamCard'

function Team() {
    return (
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            <li>
                <TeamCard
                    name='M. Taufik Hidayat'
                    photo="/team/noprofile.jpg"
                    nim="220602017"
                />
            </li>
            <li>
                <TeamCard
                    name='Dwi Hartilawati'
                    photo="/team/noprofile.jpg"
                    nim="220602007"

                />
            </li>
            <li>
                <TeamCard
                    name='Zulzario Zaeri'
                    photo="/team/rand.webp"
                    nim="220602030"
                />
            </li>
            {/* <li>
                <TeamCard
                    name='ChatGPT'
                    photo="/team/chatgpt.jpg"
                />
            </li> */}
        </ul>
    )
}

export default Team