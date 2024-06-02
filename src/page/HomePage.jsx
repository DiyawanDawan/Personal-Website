
import Hero from '../components/Hero'
import HomeCard from '../components/HomeCard'
import JobListings from '../components/JobListings'
import { Skills } from '../components/Skills'
// import ViewAllJobs from '../components/ViewAllJobs'


const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCard />
      <JobListings isHome={true}/>
      {/* <ViewAllJobs isHome={true}/> */}
      <Skills />
    </>
  )
}

export default HomePage