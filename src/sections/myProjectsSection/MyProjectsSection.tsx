const MyProjectsSection = () => {
  return (
    <div
      id="projects"
      data-section="projects"
      className="text-white [animation:var(--animation-fade-in)] scroll-section"
    >
      <h1 className="text-4xl font-semibold mb-4 tracking-[.10rem]">
        My Projects
      </h1>
      <p>Here you can find a list of my projects.</p>
      <img
        src="/public/assets/imgs/under-construction-transparent.png"
        alt="under-construction"
        className="m-auto w-1/2"
      />
      {/* Add your project components or links here */}
    </div>
  )
}

export default MyProjectsSection
