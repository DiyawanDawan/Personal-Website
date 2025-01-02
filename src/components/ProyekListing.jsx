import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProyekListing = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <div key={job.id} className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.role}</div>
          <div>
            <img
              className="rounded-sm w-full h-52 object-cover"
              src={job.image}
              alt={job.title}
            />
          </div>
          <h3 className="text-xl font-bold pt-4">{job.title}</h3>
        </div>

        {/* Deskripsi Singkat atau Penuh */}
        <div className="mb-5">
          {showFullDescription
            ? job.description
            : `${job.description.substring(0, 90)}...`}
        </div>

        {/* Konten Tambahan: Highlights, Technologies, Demo Link, Repository Link */}
        {showFullDescription && (
          <>
            <h3 className="text-indigo-800 text-lg font-bold mb-2">
              Highlights
            </h3>
            <ul className="mb-4">
              {job.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>

            <h3 className="text-indigo-800 text-lg font-bold mb-2">
              Technologies
            </h3>
            <ul className="mb-4">
              {job.technologies.map((tech, index) => (
                <li key={index}>{`${index + 1}. ${tech}`}</li>
              ))}
            </ul>

            <hr className="my-4" />
            <h3 className="text-indigo-800 text-lg font-bold mb-2">Demo Link</h3>
            <p className="mb-4">
              <a
                href={job.demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {job.demoLink}
              </a>
            </p>

            <h3 className="text-indigo-800 text-lg font-bold mb-2">
              Repository Link
            </h3>
            <p className="mb-4">
              <a
                href={job.repositoryLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {job.repositoryLink}
              </a>
            </p>
          </>
        )}

        {/* Tombol untuk Menampilkan atau Menyembunyikan Konten */}
        <button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className="text-indigo-500 mb-5 hover:text-indigo-600"
        >
          {showFullDescription ? "Less" : "More"}
        </button>

        <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <FaMapMarkerAlt className="inline text-lg mb-1 mr-1" />
            {job.type}
          </div>
          <Link
            to={`/proyek/${job._id}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProyekListing;
