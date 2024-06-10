
import Hero from '../components/Hero'
import HomeCard from '../components/HomeCard'
import ProyekListings from '../components/ProyekListings'
import Services from '../components/Services'
// import Sertifikasi from '../components/Sertifikasi'
import SertifikasiPage from './SertifikasiPage'
import SkillsPage from './SkillsPage'
// import ViewAllJobs from '../components/ViewAllJobs'


const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCard />
      <ProyekListings isHome={true}/>
      {/* <ViewAllJobs isHome={true}/> */}
      <Services />
      <SkillsPage />
      <SertifikasiPage />
    </>
  )
}

export default HomePage