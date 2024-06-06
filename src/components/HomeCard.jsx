//   target: 'https://servers-api.vercel.app',
import { Link } from "react-router-dom"
import Card from "./Card"
const HomeCard = () => {
  return (
    <section className="py-4">
    <div className="container-xl lg:container m-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
       
        <Card>
        <h2 className="text-2xl font-bold">For Developers</h2>
          <p className="mt-2 mb-4">
            Browse our React project and start code blog with learn
          </p>
          <Link
            to="/proyek"
            className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
          >
            Browse Project
          </Link>
        </Card>
        <Card bg="bg-indigo-200">
        <h2 className="text-2xl font-bold">For Busines</h2>
          <p className="mt-2 mb-4">
            List services countact with busines for me
          </p>
          <Link
            to="/services"
            className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
          >
            Read More
          </Link>
        </Card>
      </div>
    </div>
    
  </section>
  )
}
  
export default HomeCard