// src/components/animatedBlobs/AnimatedBlobs.tsx
import type { FC } from 'react'

const AnimatedBlobs: FC = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Blob 1 */}
      <svg
        className="absolute top-[-100px] left-[-150px] w-[700px] h-[700px] animate-blob"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="blobGradient1" gradientTransform="rotate(45)">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-secondary)" />
          </linearGradient>
        </defs>
        <path
          fill="url(#blobGradient1)"
          d="M53.1,-65.5C67.2,-54.9,75.9,-36.2,75.3,-18.7C74.7,-1.2,64.8,14.1,55.4,27.5C46.1,41,37.2,52.6,24.7,61.4C12.3,70.1,-3.6,76,-18.7,71.1C-33.9,66.1,-48.2,50.3,-57.4,34.1C-66.6,17.8,-70.6,1.1,-68.2,-14.3C-65.7,-29.8,-56.7,-43.9,-44.6,-54.6C-32.4,-65.3,-16.2,-72.6,2,-74.8C20.2,-77.1,40.3,-74.1,53.1,-65.5Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* Blob 2 */}
      <svg
        className="absolute bottom-[-100px] right-[-150px] w-[600px] h-[600px] animate-blob animation-delay-2000"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="blobGradient2" gradientTransform="rotate(135)">
            <stop offset="0%" stopColor="var(--color-primary)" />
            <stop offset="100%" stopColor="var(--color-secondary)" />
          </linearGradient>
        </defs>
        <path
          fill="url(#blobGradient2)"
          d="M43.6,-63.4C56.2,-51.5,65.5,-37.2,69.4,-22.7C73.3,-8.3,71.9,6.3,65.4,18.6C59,30.8,47.4,40.7,35.2,50.4C23,60,11.5,69.4,-0.7,70.4C-13,71.3,-26.1,63.9,-38.7,54.7C-51.2,45.6,-63.1,34.6,-67.9,20.8C-72.8,6.9,-70.7,-9.7,-62.4,-22.5C-54.1,-35.4,-39.6,-44.5,-25.3,-55.4C-11.1,-66.3,3,-79.2,17.5,-77.1C32.1,-75,47,-58.4,43.6,-63.4Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  )
}

export default AnimatedBlobs
