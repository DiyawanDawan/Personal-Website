
import Hero from '../components/Hero'
import HomeCard from '../components/HomeCard'
import ProyekListings from '../components/ProyekListings'
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
    </>
  )
}

export default HomePage