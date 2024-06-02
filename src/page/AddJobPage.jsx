import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddJobPage = ({ addJobSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [technologies, setTechnologies] = useState([]);
  const [repositoryLink, setRepositoryLink] = useState("");
  const [demoLink, setDemoLink] = useState("");
  const [role, setRole] = useState("");
  const [highlights, setHighlights] = useState([""]);

  const navigate = useNavigate();

  const handleHighlightsChange = (index, value) => {
    const newHighlights = [...highlights];
    newHighlights[index] = value;
    setHighlights(newHighlights);
  };

  const addHighlight = () => {
    setHighlights([...highlights, ""]);
  };

  const submitForm = (e) => {
    e.preventDefault();

    const newProject = {
      title,
      description,
      startDate,
      endDate,
      technologies,
      repositoryLink,
      demoLink,
      role,
      highlights
    };

    addJobSubmit(newProject);
    toast.success('Project added successfully');
    navigate('/jobs');
  };

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Add Project</h2>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Project Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Project Title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="A brief description of the project"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                className="border rounded w-full py-2 px-3 mb-2"
                required
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                className="border rounded w-full py-2 px-3 mb-2"
                required
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Technologies
              </label>
              <input
                type="text"
                id="technologies"
                name="technologies"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="e.g. Python, Django, JavaScript"
                required
                value={technologies.join(', ')}
                onChange={(e) => setTechnologies(e.target.value.split(',').map(tech => tech.trim()))}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Repository Link
              </label>
              <input
                type="url"
                id="repositoryLink"
                name="repositoryLink"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="https://github.com/username/project1"
                required
                value={repositoryLink}
                onChange={(e) => setRepositoryLink(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Demo Link
              </label>
              <input
                type="url"
                id="demoLink"
                name="demoLink"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="https://www.project1demo.com"
                required
                value={demoLink}
                onChange={(e) => setDemoLink(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Role
              </label>
              <input
                type="text"
                id="role"
                name="role"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Lead Developer"
                required
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Highlights
              </label>
              {highlights.map((highlight, index) => (
                <input
                  key={index}
                  type="text"
                  className="border rounded w-full py-2 px-3 mb-2"
                  placeholder={`Highlight ${index + 1}`}
                  value={highlight}
                  onChange={(e) => handleHighlightsChange(index, e.target.value)}
                />
              ))}
              <button
                type="button"
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-2"
                onClick={addHighlight}
              >
                Add Highlight
              </button>
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Project
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddJobPage;
