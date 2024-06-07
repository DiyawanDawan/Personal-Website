import { useLoaderData, Link } from "react-router-dom";
import { FaArrowLeft, FaMapMarkerAlt } from "react-icons/fa";
// import { toast } from "react-toastify";

const ProyekPage = () => {
  // { deleteJob }
  // const navigate = useNavigate();
  const job = useLoaderData();

  // const onDeleteClick = (jobId) => {
  //   const confirm = window.confirm('Are you sure you want to delete this listing?');
  //   if (!confirm) return;
  //   deleteJob(jobId);
  //   toast.success('Job deleted successfully');
  //   navigate('/jobs');
  // };

  return (
    <>
      {/* Go Back */}
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/proyek"
            className="text-indigo-500 hover:text-indigo-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" />
            Back to project Listings
          </Link>
        </div>
      </section>

      <section className="bg-indigo-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{job.role}</div>
                <img className="rounded-lg w-full h-72 object-cover" src={job.image} alt={job.image} />
              
                <h1 className="text-3xl font-bold mb-4">
                  {job.title}
                </h1>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <FaMapMarkerAlt className="text-lg text-orange-700 mr-1" />
                  <p className="text-orange-700">{job.type}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                  Project Description
                </h3>
                <p className="mb-4">
                  {job.description}
                </p>
                <h3 className="text-indigo-800 text-lg font-bold mb-2">Highlights</h3>
                <ul className="mb-4">
                  {job.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
                <h3 className="text-indigo-800 text-lg font-bold mb-2">Technologies</h3>
              
              <ul className="mb-4">
               {job.technologies.map((tech, index) => (
                 <li key={index}> {`${index + 1} ${tech}`}</li>
               ))}
             </ul>

                <h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>
                <p className="mb-4">{job.salary} / Year</p>

              </div>
            </main>

            {/* Sidebar */}
            <aside>
              {/* Company Info */}
              <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-indigo-800 text-lg font-bold mb-2">Start Date</h3>
                <p className="mb-4">{job.startDate}</p>

                <h3 className="text-indigo-800 text-lg font-bold mb-2">End Date</h3>
                <p className="mb-4">{job.endDate}</p>
             
                <hr className="my-4" />
                <h3 className="text-indigo-800 text-lg font-bold mb-2">Demo Link</h3>
                <p className="mb-4">
                  <a href={job.demoLink} target="_blank" rel="noopener noreferrer">
                    {job.demoLink}
                  </a>
                </p>

                <h3 className="text-indigo-800 text-lg font-bold mb-2">Repository Link</h3>
                <p className="mb-4">
                  <a href={job.repositoryLink} target="_blank" rel="noopener noreferrer">
                    {job.repositoryLink}
                  </a>
                </p>
              </div>

              {/* Manage */}
              {/* <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                <Link
                  to={`/edit-job/${job.id}`}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Edit Job
                </Link>
                <button onClick={() => onDeleteClick(job.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Delete Job
                </button>
              </div> */}
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};
const jobLoader = async ({ params }) => {
  const { id } = params;
  console.log("Fetching job data for ID:", id); // Debugging line
  try {
    const res = await fetch(`https://vercal-json-server.vercel.app/proyek/${id}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch job data: ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching job data:", error);
    throw error;
  }
};


export { ProyekPage as default, jobLoader };
