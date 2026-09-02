import { RiArrowRightSFill } from 'react-icons/ri'

const ContactMeSection = () => {
  return (
    <section
      id="contact"
      data-section="contact"
      className="text-white [animation:var(--animation-fade-in)] scroll-section"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center h-full my-10">
        <div className="pr-0 lg:pr-5 pb-10 lg:pb-0">
          <h1 className="text-4xl font-semibold mb-12 tracking-[.10rem] flex">
            <RiArrowRightSFill className="text-primary" /> Contact Me
          </h1>
          <div>
            <p className="text-base font-light tracking-[.10rem] max-w-xl pl-10">
              EDUARDO MARTINEZ CRUZ
            </p>
            <p className="text-base font-light tracking-[.10rem] max-w-xl pl-10">
              <span className="font-mono text-primary text-sm">Full-Stack</span>{' '}
              Developer
            </p>
            <p className="text-base font-light tracking-[.10rem] max-w-xl pl-10 mt-5">
              CDMX, México
            </p>
            <p className="text-base font-light tracking-[.10rem] max-w-xl pl-10">
              edd.dev.pro
              <span className="font-mono text-primary text-sm">@</span>
              gmail.com
            </p>
          </div>
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

export default ContactMeSection
