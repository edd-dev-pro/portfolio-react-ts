import { RiArrowRightSFill } from 'react-icons/ri'
import { BlinkingCursor } from '../../components'

const AboutMeSection = () => {
  return (
    <section
      id="about"
      data-section="about"
      className="text-white [animation:var(--animation-fade-in)] scroll-section"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center h-full my-10">
        <div className="pr-0 lg:pr-10 pb-10 lg:pb-0">
          <h1 className="text-4xl font-semibold mb-12 tracking-[.10rem] flex">
            <RiArrowRightSFill className="text-primary" /> About Me
          </h1>
          <p className="text-base font-light tracking-[.10rem] max-w-xl pl-10">
            Computer Systems Engineer with 8 years of experience in web
            development, specializing in{' '}
            <span className="font-mono text-primary text-sm">
              frontend development
            </span>{' '}
            with <span className="font-mono text-primary text-sm">React</span>,{' '}
            <span className="font-mono text-primary text-sm">Angular</span>, and{' '}
            <span className="font-mono text-primary text-sm">Next.js</span>. I
            focus on building scalable, maintainable, and high-performance
            applications.
          </p>
          <p className="text-base font-light tracking-[.10rem] max-w-xl pl-10 mt-10">
            Throughout my experience, I&apos;ve worked on solutions that
            integrate frontend applications with{' '}
            <span className="font-mono text-primary text-sm">REST APIs</span>,{' '}
            <span className="font-mono text-primary text-sm">
              backend services
            </span>
            , and{' '}
            <span className="font-mono text-primary text-sm">
              third-party integrations
            </span>
            , following best practices in modular design, version control,
            testing, and agile development <BlinkingCursor speed="slow" />
          </p>
        </div>
        <div className="relative inline-block pr-4 pb-4">
          <img
            src="/assets/imgs/profile.jpg"
            alt="Profile"
            className="block m-auto rounded-sm object-cover w-72 shadow-md"
          />
          <span className="pointer-events-none absolute top-4 right-0 bottom-0 left-4 border-r-[3px] border-b-[3px] border-[var(--color-primary)]" />

          <span className="pointer-events-none absolute top-4 right-0 w-4 border-t-[3px] border-[var(--color-primary)]" />

          <span className="pointer-events-none absolute bottom-0 left-4 h-4 border-l-[3px] border-[var(--color-primary)]" />
        </div>
      </div>
    </section>
  )
}

export default AboutMeSection
