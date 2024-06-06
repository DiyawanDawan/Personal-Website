
// import jobs from "../jobs.json";
import { useState, useEffect } from "react";
import JobListing from "./ProyekListing";
import Spinner from "./Spinner";
import ViewAllJobs from "./ViewAllJobs";

const ProyekListings = ({ isHome = false }) => {
  // console.log(jobs);

  // const jobListings = isHome ? jobs.slice(0,3) : jobs

  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const apiUrl = isHome ? '/api/proyek?_limit=3' : '/api/proyek'
    const fetchJobs = async () => {
      try {
        const res = await fetch(apiUrl)
        const data = await res.json()
        setJobs(data)
        console.log("data", data);
      } catch (error) {
        console.log('Error Fec Data', error);
      } finally {
        setLoading(false)
      }
    }
    fetchJobs()
  }, [])

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {/* { isHome ? 'Recent Jobs': ' Browse Jobs'} */}
          {isHome ? 'Recent Project' : 'Browse Project'}
        </h2>

        {/* <!-- Job Listing 1 --> */}
        {loading ? (<Spinner loading={loading} />) : (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => {
              // console.log(job);
              return (
                <JobListing key={job._id} job={job} />
              );
            })}
          </div>

        )}
         {isHome ? ( <ViewAllJobs isHome={true}/>) : ''}
      </div>
     
    </section>
  );
};

export default ProyekListings;
