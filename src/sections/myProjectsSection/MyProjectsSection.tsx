import { RiArrowRightSFill } from 'react-icons/ri'
import { BlinkingCursor, ProjectCard } from '../../components'

const MyProjectsSection = () => {
  return (
    <section
      id="projects"
      data-section="projects"
      className="text-white [animation:var(--animation-fade-in)] scroll-section"
    >
      <div className="flex flex-col items-center lg:items-start justify-start h-full my-32">
        <div className="pb-10 lg:pb-5">
          <h1 className="mb-12 flex text-4xl font-semibold tracking-[.10rem]">
            <RiArrowRightSFill className="text-primary" />
            My Projects
          </h1>

          <p className="max-w-xl pl-10 text-base font-light tracking-[.10rem]">
            Here you can explore some of the projects I&apos;ve built as a{' '}
            <span className="font-mono text-sm text-primary">
              full-stack developer
            </span>{' '}
            <BlinkingCursor speed="slow" />
          </p>
        </div>
        <div className="relative inline-block pr-0 pb-0">
          <div className="grid w-full max-w-5xl grid-cols-4 gap-5 md:grid-cols-8 lg:grid-cols-12">
            <ProjectCard
              title="Project Title 1"
              technologies={[
                'React.js',
                'TypeScript',
                'Node.js',
                'TailwindCSS',
              ]}
            />
            <ProjectCard
              title="Project Title 2"
              technologies={['Angular', 'TypeScript', 'Node.js']}
            />
            <ProjectCard
              title="Project Title 3"
              technologies={['React.js', 'JavaScript', 'Bootstrap']}
            />
            <ProjectCard
              title="Project Title 4"
              technologies={['Express.js', 'SQL', 'MongoDB']}
            />
            <ProjectCard
              title="Project Title 5"
              technologies={['Java', 'SQL', 'Spring Boot']}
            />
            <ProjectCard
              title="Project Title 6"
              technologies={['Next.js', 'TypeScript', 'Node.js', 'MongoDB']}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyProjectsSection
