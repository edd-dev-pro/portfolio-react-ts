import Sidebar from '../core/Sidebar'
import SectionIndicator from '../core/SectionIndicator'

const DefaultLayout = () => {
  return (
    <>
      <Sidebar />
      <div>Main Content</div>
      <SectionIndicator />
    </>
  )
}

export default DefaultLayout
