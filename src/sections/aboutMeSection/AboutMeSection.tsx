import { RiArrowRightSFill } from 'react-icons/ri'

const AboutMeSection = () => {
  return (
    <section
      id="about"
      data-section="about"
      className="text-white [animation:var(--animation-fade-in)] scroll-section"
    >
      <h1 className="text-4xl font-semibold mb-4 tracking-[.10rem] flex">
        <RiArrowRightSFill className="text-primary" /> About Me
      </h1>
      <p className="text-base font-light tracking-[.10rem] max-w-xl">
        I&apos;m a dedicated software engineer with over 6 years of experience
        in building scalable and efficient web applications. I love working with
        JavaScript, TypeScript, and modern frameworks to deliver high-quality
        user experiences.
      </p>
      <img
        src="/public/assets/imgs/under-construction-transparent.png"
        alt="under-construction"
        className="m-auto w-1/2"
      />
    </section>
  )
}

export default AboutMeSection
