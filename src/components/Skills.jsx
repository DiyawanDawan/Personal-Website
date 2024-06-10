import { BiLogoTailwindCss } from "react-icons/bi";
import { FaBootstrap,  FaCss3, FaHtml5, FaNode, FaReact, FaServer } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { TbBrandOffice } from "react-icons/tb";

export const Skills = () => {
  return (
    <div className="container mx-auto py-12 px-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6 text-center">
        <span className="border-b-4 border-indigo-500 inline-block pb-1">Skills</span>
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <li className="flex items-center justify-center py-4 px-6 rounded-lg shadow-md bg-gray-100 hover:bg-gray-200 text-2xl">
            <SiJavascript className="text-orange-300 fas  mr-2 " size={30} />JavaScript
        </li>
        <li className="flex items-center justify-center py-4 px-6 rounded-lg shadow-md bg-gray-100 hover:bg-gray-200 text-2xl" >
          {/* <i className="text-indigo-500 fas fa-react mr-2"></i>  */}
          <FaReact className="text-indigo-500 fas fa-react mr-2" size={30}/>React.js
        </li>
        <li className="flex items-center justify-center py-4 px-6 rounded-lg shadow-md bg-gray-100 hover:bg-gray-200 text-2xl">
          {/* <i className="text-indigo-500 fas fa-server mr-2"></i>  */}
          <FaServer className="text-indigo-500 fas fa-server mr-2"size={30}/>Express.js
        </li>
        <li className="flex items-center justify-center py-4 px-6 rounded-lg shadow-md bg-gray-100 hover:bg-gray-200 text-2xl">
          {/* <i className="text-indigo-500 fas fa-link mr-2"></i>  */}
          <FaNode className="text-lime-700 fas fa-link mr-2"size={30}/>Node.js
        </li>
        <li className="flex items-center justify-center py-4 px-6 rounded-lg shadow-md bg-gray-100 hover:bg-gray-200 text-2xl">
          {/* <i className="text-indigo-500 fas fa-codepen mr-2"></i>  */}
          <FaHtml5 className="text-red-500 fas fa-codepen mr-2"size={30}/>HTML5
        </li>
        <li className="flex items-center justify-center py-4 px-6 rounded-lg shadow-md bg-gray-100 hover:bg-gray-200 text-2xl">
          {/* <i className="text-indigo-500 fas fa-css3-alt mr-2"></i>  */}
          <FaCss3 className="text-indigo-500 fas fa-css3-alt mr-2"size={30}/>CSS3
        </li>
        <li className="flex items-center justify-center py-4 px-6 rounded-lg shadow-md bg-gray-100 hover:bg-gray-200 text-2xl">
          {/* <i className="text-indigo-500 fas fa-bootstrap mr-2"></i>  */}
          <FaBootstrap className="text-indigo-500 fas fa-bootstrap mr-2"size={30} />Bootstrap
        </li>
        <li className="flex items-center justify-center py-4 px-6 rounded-lg shadow-md bg-gray-100 hover:bg-gray-200 text-2xl">
          {/* <i className="text-indigo-500 fas fa-wind mr-2"></i>  */}
          <BiLogoTailwindCss className="text-cyan-700 fas fa-wind mr-2"size={30}/>Tailwind CSS
        </li>
        <li className="flex items-center justify-center py-4 px-6 rounded-lg shadow-md bg-gray-100 hover:bg-gray-200 text-2xl">
          {/* <i className="text-indigo-500 fas fa-wind mr-2"></i>  */}
          <TbBrandOffice className="text-orange-500 fas fa-wind mr-2"size={30}/>Microsoft Office
        </li>
      </ul>
    </div>
  );
};

export default Skills;
