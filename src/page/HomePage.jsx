
import Hero from '../components/Hero'
import HomeCard from '../components/HomeCard'
import ProyekListings from '../components/ProyekListings'
import Sertifikasi from '../components/Sertifikasi'
import { Skills } from '../components/Skills'
// import ViewAllJobs from '../components/ViewAllJobs'


const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCard />
      <ProyekListings isHome={true}/>
      {/* <ViewAllJobs isHome={true}/> */}
      <Skills />
      <Sertifikasi />
    </>
  )
}

export default HomePage