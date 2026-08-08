import sandeepCivilImage from '../assets/sandeep_civil.png'
import eshaImage from '../assets/Isha.jpeg'

const team = [
  {
    name: 'Er Sandeep Kumar',
    role: 'Founder & Principal Engineer',
    bio: 'A seasoned consulting engineer with deep expertise in planning, structural thinking, and vastu-aligned design for modern homes and renovations.',
    image: sandeepCivilImage,
  },
  {
    name: 'Er Esha Prajapati',
    role: 'Head - Interior & 3D Visualization',
    bio: 'An interior and visualization specialist focused on elegant spaces, thoughtful detailing, and clear design communication.',
    image: eshaImage,
  },
]

function Team() {
  return (
    <section id="team" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--accent)]">Team</p>
          <h2 className="mt-3 text-3xl font-semibold text-[color:var(--text)] sm:text-4xl">Experienced minds shaping value at every scale.</h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {team.map((member) => (
            <article key={member.name} className="flex h-full flex-col items-center justify-center rounded-[1.5rem] border border-[color:var(--border)] bg-[color:var(--panel)]/70 p-6 text-center">
              <div className="mx-auto flex h-56 w-56 items-center justify-center overflow-hidden rounded-full border-4 border-[color:var(--accent)] bg-[color:var(--panel-2)]/90 p-2 shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full rounded-full object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-base font-semibold text-[color:var(--text)]">{member.name}</h3>
              <p className="mt-2 text-sm font-medium uppercase tracking-[0.25em] text-[color:var(--accent)]">{member.role}</p>
              <p className="mt-4 text-base leading-7 text-white">{member.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
