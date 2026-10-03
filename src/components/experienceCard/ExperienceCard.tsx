import type { FC } from 'react'

interface ExperienceCardInterface {
  title: string
  company: string
  period: string
  bullets: string[]
}

const ExperienceCard: FC<ExperienceCardInterface> = ({
  title,
  company,
  period,
  bullets,
}) => {
  return (
    <div className="text-base font-light tracking-[.10rem] max-w-xl lg:pl-10">
      <h3 className="text-3xl pb-3 mb-3 border-b-1 border-primary">{title}</h3>
      <p className="text-md mb-3">{company}</p>
      <p className="text-md mb-3">{period}</p>
      <ul className="list-disc pl-5 marker:text-primary">
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  )
}

export default ExperienceCard
