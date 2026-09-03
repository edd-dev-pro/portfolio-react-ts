import { BlinkingCursor, Modal } from '../../components'
import useBoolean from '../../hooks/useBoolean'
import DefaultLayout from '../../layout/DefaultLayout'
import { HeroSection } from '../../sections'

const Home = () => {
  const { value, setFalse } = useBoolean()

  return (
    <DefaultLayout>
      <HeroSection />
      {value && (
        <Modal onClose={setFalse}>
          <h1 className="text-5xl font-semibold mb-6 tracking-[.10rem]">
            Hi buddy
          </h1>
          <p className="font-extralight text-base/relaxed tracking-[.10rem] max-w-xl">
            Some{' '}
            <span className="font-mono text-primary text-sm">sections</span> are
            still under development <BlinkingCursor speed="slow" />
          </p>
        </Modal>
      )}
    </DefaultLayout>
  )
}

export default Home
