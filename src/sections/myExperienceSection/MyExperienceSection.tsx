const MyExperienceSection = () => {
  return (
    <div
      id="experience"
      data-section="experience"
      className="text-white [animation:var(--animation-fade-in)] scroll-section"
    >
      <h1 className="text-4xl font-semibold mb-4 tracking-[.10rem]">
        My Experience
      </h1>
      <p>Here you can find a list of my experience.</p>
      <img
        src="/public/assets/imgs/under-construction-transparent.png"
        alt="under-construction"
        className="m-auto w-1/2"
      />
    </div>
  )
}

export default MyExperienceSection
