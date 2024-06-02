import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import HomePage from "./page/HomePage"
import MainLayout from "./layouts/MainLayout"
import JobsPage from "./page/JobsPage"
import JobPage, { jobLoader } from "./page/JobPage"
import NotFoudPage from "./page/NotFoudPage"
import AddJobPage from "./page/AddJobPage"
import EditJobPage from "./page/EditJobPage"




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
      method: 'PUT',
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
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path="/edit-job/:id" element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
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