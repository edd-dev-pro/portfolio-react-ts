import { BlinkingCursor } from '../../components'

const HeroSection = () => {
  return (
    <section
      id="home"
      data-section="home"
      className="text-white [animation:var(--animation-fade-in)] scroll-section"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center h-full my-30">
        <div className="pr-0 lg:pr-5">
          <p className="font-mono text-primary text-sm mb-6 tracking-[.10rem]">
            Hi, my name is
          </p>
          <h1 className="text-5xl font-semibold mb-3 tracking-[.10rem]">
            Eduardo Martinez
          </h1>
          <h2 className="text-5xl font-semibold mb-6 tracking-[.10rem]">
            <span>I&apos;m passionate about building software</span>
          </h2>
          <p className="font-extralight text-base/relaxed tracking-[.10rem] max-w-xl">
            I enjoy building{' '}
            <span className="font-mono text-primary text-sm">
              digital products
            </span>{' '}
            and creating fast, maintainable experiences through clean, modular
            architecture and reliable testing. I’m always{' '}
            <span className="font-mono text-primary text-sm">learning</span> and{' '}
            <span className="font-mono text-primary text-sm">exploring</span>{' '}
            modern <span className="font-mono text-primary text-sm">tools</span>{' '}
            and{' '}
            <span className="font-mono text-primary text-sm">technologies</span>{' '}
            to improve the way I build software <BlinkingCursor speed="slow" />
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
