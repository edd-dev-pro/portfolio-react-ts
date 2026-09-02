import type { FC } from 'react'
import { GoFileDirectory } from 'react-icons/go'
import { Badge, OutlineButton } from '../../components'

interface ProjectCardProps {
  title: string
  technologies: string[]
}

const ProjectCard: FC<ProjectCardProps> = ({ title, technologies }) => {
  return (
    <div className="col-span-4 aspect-square flex flex-col justify-between p-5 bg-neutral-800 rounded-sm shadow-lg hover:shadow-xl">
      <div className="inline-flex w-fit p-3 text-2xl text-primary bg-neutral-700 rounded-full">
        <GoFileDirectory />
      </div>
      <div>
        <p className="text-xs mb-5 font-light tracking-[.10rem]">
          edd<span className="font-mono text-sm text-primary">&</span>dev
        </p>
        <h3 className="text-2xl mb-5 font-semibold tracking-[.10rem]">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech) => (
            <Badge tech={tech} key={tech} />
          ))}
        </div>
      </div>
      <div className="mt-5 border-t border-neutral-700 pt-5">
        <OutlineButton text="View Project" href="#" />
      </div>
    </div>
  )
}

export default ProjectCard
