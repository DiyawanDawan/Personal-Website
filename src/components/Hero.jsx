import { FaDev, FaGithub, FaInstagram, FaLinkedin, FaMedium, FaYoutube } from "react-icons/fa";
import pp from '../assets/images/pp.JPG'
const Hero = ({
  title = "I'am Web Developer",
  subtitle = "Find the project that fits my skill set",
}) => {
  const styles = {
    transform: "rotate(180deg)",
    transition: "0.3s",
  };
  const styles1 = {
    transform: "translate(0, 0px",
    opacity: "1",
  };
  return (
    <>
      <section className="bg-slate-400 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              {title}
            </h1>
            <p className="my-4 text-xl text-white">{subtitle}</p>
          </div>
        </div>
      </section>
      <section>
        <svg
          id="wave"
          style={styles}
          viewBox="0 0 1440 270"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop
                stop-color="rgba(81.865, 98.479, 221.168, 1)"
                offset="0%"
              ></stop>
              <stop
                stop-color="rgba(134.365, 0.536, 168.802, 1)"
                offset="100%"
              ></stop>
            </linearGradient>
          </defs>
          <path
            style={styles1}
            fill="url(#sw-gradient-0)"
            d="M0,54L48,76.5C96,99,192,144,288,162C384,180,480,171,576,162C672,153,768,144,864,148.5C960,153,1056,171,1152,180C1248,189,1344,189,1440,162C1536,135,1632,81,1728,49.5C1824,18,1920,9,2016,13.5C2112,18,2208,36,2304,76.5C2400,117,2496,180,2592,193.5C2688,207,2784,171,2880,153C2976,135,3072,135,3168,126C3264,117,3360,99,3456,99C3552,99,3648,117,3744,144C3840,171,3936,207,4032,198C4128,189,4224,135,4320,108C4416,81,4512,81,4608,90C4704,99,4800,117,4896,135C4992,153,5088,171,5184,171C5280,171,5376,153,5472,130.5C5568,108,5664,81,5760,99C5856,117,5952,180,6048,202.5C6144,225,6240,207,6336,184.5C6432,162,6528,135,6624,130.5C6720,126,6816,144,6864,153L6912,162L6912,270L6864,270C6816,270,6720,270,6624,270C6528,270,6432,270,6336,270C6240,270,6144,270,6048,270C5952,270,5856,270,5760,270C5664,270,5568,270,5472,270C5376,270,5280,270,5184,270C5088,270,4992,270,4896,270C4800,270,4704,270,4608,270C4512,270,4416,270,4320,270C4224,270,4128,270,4032,270C3936,270,3840,270,3744,270C3648,270,3552,270,3456,270C3360,270,3264,270,3168,270C3072,270,2976,270,2880,270C2784,270,2688,270,2592,270C2496,270,2400,270,2304,270C2208,270,2112,270,2016,270C1920,270,1824,270,1728,270C1632,270,1536,270,1440,270C1344,270,1248,270,1152,270C1056,270,960,270,864,270C768,270,672,270,576,270C480,270,384,270,288,270C192,270,96,270,48,270L0,270Z"
          ></path>
        </svg>
        <div className="container-xl lg:container m-auto px-3">
          <div className="grid grid-cols-1 md:grid-cols-2  rounded-lg items-center ">
            <div className="justify-between flex flex-col">
              <div>
                <h3 className="font-bold text-4xl sm:text-center  md:text-left  lg:text-left  xl:text-left">
                  Halo saya <span className="text-indigo-600">Diyawan</span>
                </h3>
                <h4 className="text-gray-400 text-2xl sm:text-center md:text-left  lg:text-left  xl:text-left">
                  Front End Developer
                </h4>
                <p className="mt-3 text-sm sm:text-center  md:text-left  lg:text-left  xl:text-left">
                  Saya adalah seorang mahasiswa yang mengejar gelar Sarjana
                  Teknik Informatika. Saya telah terdaftar dalam program studi
                  ini selama 3 tahun. Sepanjang periode ini, saya telah
                  mengabdikan diri pada studi saya dalam pengembangan web,
                  terutama fokus pada Front End. Selain itu, saya terus mengasah
                  keterampilan dan mengembangkan keterampilan lunak saya selama
                  perjalanan akademik saya baik melalui course bahkan even
                  seminar. Saya juga memiliki kemampuan komunikasi yang sangat
                  baik dan mampu bekerja secara efektif dalam tim.
                </p>
              </div>
              <div className="mt-10">
                <h3 className="text-2xl font-bold border-b-2 border-indigo-600 text-indigo-500">Connect </h3>
                <div className="flex mt-3">
               <a className="mr-3" target="_blank" title="Instagram" href=""> <FaInstagram color="red"  size={30}/></a>
               <a  className="mx-3" target="_blank" title="LinkedIn" href="https://www.linkedin.com/in/diyawan-diyawan-a22394215/"> <FaLinkedin fill="blue" size={30}/></a>
               <a  className="mx-3" title="Youtube" target="_blank"  href=""> <FaYoutube fill="red" size={30}/></a>
               <a className="mx-3" title="Github" target="_blank" href=""> <FaGithub size={30}/></a>
               <a className="mx-3" title="Medium" target="_blank" href=""> <FaMedium size={30}/></a>
               <a  className="mx-3" title="Dev" target="_blank" href=""> <FaDev size={30}/></a>
              </div>
              </div>
              
            </div>
            <div className="pl-7 sm:pt-4">
              <img
                className="rounded-full sm:w-2/3 md:w-50 sm:border-cyan-400 shadow-lg"
                src="https://i.ibb.co.com/kyZVHZX/pp.jpg"
                alt="Profile"
              />
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#5000ca"
            fill-opacity="1"
            d="M0,256L48,224C96,192,192,128,288,122.7C384,117,480,171,576,186.7C672,203,768,181,864,176C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section>
    </>
  );
};

export default Hero;
