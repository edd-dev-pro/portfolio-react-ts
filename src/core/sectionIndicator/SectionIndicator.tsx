import type { FC } from 'react'

interface sectionIndicatorProps {
  current: string
}

const SectionIndicator: FC<sectionIndicatorProps> = ({ current }) => {
  return (
    <div className="hidden lg:flex flex-col justify-between items-center absolute right-0 bottom-10 mr-6 h-24 text-white">
      <div className="flex flex-col items-center">
        {/* Línea superior */}
        <div className="w-[2px] rounded-4xl h-10 bg-muted opacity-[.25]" />

        {/* Punto blanco */}
        <div className="w-2 h-2 rounded-full bg-white [animation:var(--animation-bounce-y)]" />
      </div>

      {/* Texto rotado */}
      <div className="rotate-90 origin-center text-[12px] font-mono tracking-[.25rem] uppercase whitespace-nowrap">
        {current}
      </div>
    </div>
  )
}

export default SectionIndicator
