import { useEffect, useState } from "react";
import Spinner from "./Spinner";

const Sertifikasi = () => {
  const [sertifikasi, setSertifikasi] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getDataSertifikat = async () => {
      const response = await fetch(
        "https://vercal-json-server.vercel.app/certificate"
      );
      const json = await response.json();
      setSertifikasi(json);
      setLoading(false);
      // console.log('json', json);
    };
    getDataSertifikat();
  }, []);

  return (
    <div className="container mx-auto py-12 px-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6 text-center">
        <span className="border-b-4 border-indigo-500 inline-block pb-1">
          Chertification
        </span>
      </h2>

      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sertifikasi.map((item) => {
            return (
              <div key={item._id} className="bg-white p-4 rounded-lg shadow-md">
                  
                <a href={item.urlCredential} target="_blank"><img
                src={item.image}
                alt={item.name}
                className="w-full h-auto object-cover rounded-md"
              /><h3 className="mt-3 text-blue-700 text-sm">{item.name}</h3> </a>
            
            </div>
            )
          })}
        </div>
      )}
    </div>
  );
};

export default Sertifikasi;
