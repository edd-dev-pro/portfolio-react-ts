import type { FC } from 'react'

interface sectionIndicatorProps {
  current: string
}

const SectionIndicator: FC<sectionIndicatorProps> = ({ current }) => {
  current = current.replace('/', '') || 'home'

  return (
    <div id="section-indicator" className="absolute bottom-9 right-3">
      <div
        id="section-indicator"
        className="lg:flex flex-col justify-between items-center mr-0 lg:mr-6 h-24 text-white"
      >
        <div className="flex flex-col items-center mb-5 lg:mb-0">
          <div className="w-[2px] rounded-4xl h-10 bg-muted opacity-[.25]" />
          <div className="w-2 h-2 rounded-full bg-white [animation:var(--animation-bounce-y)]" />
        </div>
        <div className="rotate-90 origin-center text-[12px] font-mono tracking-[.25rem] uppercase whitespace-nowrap">
          {current}
        </div>
      </div>
    </div>
  )
}

export default SectionIndicator
