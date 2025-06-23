import { useEffect } from 'react'
import './styles/lava-blobs.css'

const LavaBlobs = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = '/lava-logic.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return <canvas id="liq-blob"></canvas>
}

export default LavaBlobs
