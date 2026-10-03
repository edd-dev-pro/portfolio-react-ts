import { useState } from 'react'
import { RiArrowRightSFill } from 'react-icons/ri'
import { ExperienceCard } from '../../components'
import { EXPERIENCES, LABELS } from './constants'
import classNames from 'classnames'

const MyExperienceSection = () => {
  const [company, setCompany] = useState<string>('ids-comercial-1')

  const selectedExperience = EXPERIENCES.find(
    (experience) => experience.id === company,
  )

  return (
    <section
      id="experience"
      data-section="experience"
      className="text-white [animation:var(--animation-fade-in)] scroll-section"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center h-full my-10">
        <div className="pr-0 w-full lg:w-auto lg:pr-5 pb-10 lg:pb-0">
          <h1 className="text-4xl font-semibold mb-12 tracking-[.10rem] flex">
            <RiArrowRightSFill className="text-primary" /> My Experience
          </h1>
          <div className="pl-10">
            {LABELS.map((label) => (
              <button
                key={label.id}
                type="button"
                aria-pressed={company === label.id}
                className={classNames(
                  'cursor-pointer w-full text-left block hover:bg-neutral-700 hover:text-primary hover:border-l-4 hover:border-primary text-muted rounded-r-sm font-mono p-3',
                  {
                    'bg-neutral-700 text-primary border-l-4 border-primary':
                      company === label.id,
                  },
                )}
                onClick={() => setCompany(label.id)}
              >
                {label.label}
              </button>
            ))}
          </div>
        </div>
        <div className="relative inline-block">
          {selectedExperience && (
            <ExperienceCard
              title={selectedExperience.title}
              company={selectedExperience.company}
              period={selectedExperience.period}
              bullets={selectedExperience.bullets}
            />
          )}
        </div>
      </div>
    </section>
  )
}

export default MyExperienceSection
