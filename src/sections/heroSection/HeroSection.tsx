import { BlinkingCursor } from '../../components'

const HeroSection = () => {
  return (
    <section
      id="home"
      data-section="home"
      className="text-white [animation:var(--animation-fade-in)] scroll-section"
    >
      <p className="font-mono text-primary text-sm mb-6 tracking-[.10rem]">
        Hi, my name is
      </p>
      <h1 className="text-5xl font-semibold mb-3 tracking-[.10rem]">
        Eduardo Martinez
      </h1>
      <h2 className="text-5xl font-semibold mb-6 tracking-[.10rem]">
        <span>I&apos;m passionate about Development</span>
      </h2>
      <p className="font-extralight text-base/relaxed tracking-[.10rem] max-w-xl">
        I love building{' '}
        <span className="font-mono text-primary text-sm">digital tools</span>{' '}
        and creating fast, easy-to-maintain experiences using good practices,
        modular design, and testing. I{' '}
        <span className="font-mono text-primary text-sm">keep learning </span>{' '}
        modern tools and technologies <BlinkingCursor speed="slow" />
      </p>
    </section>
  )
}

export default HeroSection
