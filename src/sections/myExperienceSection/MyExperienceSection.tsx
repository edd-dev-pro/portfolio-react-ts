import { RiArrowRightSFill } from 'react-icons/ri'
import { BlinkingCursor } from '../../components'

const MyExperienceSection = () => {
  return (
    <section
      id="experience"
      data-section="experience"
      className="text-white [animation:var(--animation-fade-in)] scroll-section"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center h-full my-10">
        <div className="pr-0 lg:pr-5 pb-10 lg:pb-0">
          <h1 className="text-4xl font-semibold mb-12 tracking-[.10rem] flex">
            <RiArrowRightSFill className="text-primary" /> My Experience
          </h1>
          <p className="text-base font-light tracking-[.10rem] max-w-xl pl-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            pulvinar risus et pulvinar cursus. Phasellus eget mi quis massa
            eleifend sollicitudin. <BlinkingCursor speed="slow" />
          </p>
        </div>
        <div className="relative inline-block pr-4 pb-4">
          <img
            src="/assets/imgs/under-construction-transparent.png"
            alt="under-construction"
            className="m-auto w-1/2"
          />
        </div>
      </div>
    </section>
  )
}

export default MyExperienceSection
