import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import HomePage from "./page/HomePage"
import MainLayout from "./layouts/MainLayout"
import NotFoudPage from "./page/NotFoudPage"
import ProyeksPage from "./page/ProyeksPage"
// import ProyekPage { jobLoader } from "./page/ProyekPage"
import EditProyekPage from "./page/EditJProyekPage"
import AddProyekPage from "./page/AddProyekPage"
import ProyekPage, {jobLoader }  from "./page/ProyekPage"



const App = () => {
  const addJob = async (newJob) => {
    // console.log(newJob);
    await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    })
    return;
  }
  const deleteJob = async (id) => {
    // console.log('Delete', id);
    await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    })
    return;
  }
  const updateJob = async (job) => {
    await fetch(`/api/jobs/${job.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    })
    return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<ProyeksPage />} />
        <Route path="/jobs/:id" element={<ProyekPage deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path="/edit-job/:id" element={<EditProyekPage updateJobSubmit={updateJob} />} loader={jobLoader} />
        <Route path="/add-job" element={<AddProyekPage addJobSubmit={addJob} />} />
        <Route path="*" element={<NotFoudPage />} />
      </Route>
    )

  )
  return (
    <RouterProvider router={router} />
    // <>
    //   <Navbar />
    //   <Hero />
    //   <HomeCard />
    //   <JobListings />
    //   <ViewAllJobs />
    // </>
  )
}

export default App