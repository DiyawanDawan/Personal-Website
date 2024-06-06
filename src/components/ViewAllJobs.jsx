import { Link } from "react-router-dom"

const ViewAllJobs = ({isHome = false}) => {
    return (
        <section className="m-auto max-w-lg my-10 px-6">
          {isHome ? (  <Link
                to="/proyeks"
                className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
            >View All Project</Link
            >) : ""}
        </section>
    )
}

export default ViewAllJobs