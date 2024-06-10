import Card from "./Card";

const Services = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          <span className="border-b-4 border-indigo-500 inline-block pb-1">
            Services
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-lg">
          <Card>
            <img className="rounded-sm mb-2"  src="https://images.unsplash.com/photo-1610168388710-a8cfbafe6c30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW50ZXJuZXQlMjBvZiUyMHRoaW5nc3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <h2 className="text-2xl font-bold">Internet of Things</h2>
            <p className="mt-2 mb-4">
              Integrate smart solutions into your environment with our IoT services.
            </p>
            <a
              href="mailto:diyawandawan@gmail.com?subject=Inquiry about Internet of Things services"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Contact Us
            </a>
          </Card>
          <Card bg="bg-indigo-200">
            <img className="rounded-sm mb-2"  src="https://images.unsplash.com/photo-1562877773-a37120131ec4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG1pY3JvY29udHJvbGxlcnN8ZW58MHx8MHx8fDA%3D" alt="" />
            <h2 className="text-2xl font-bold">Microcontroller</h2>
            <p className="mt-2 mb-4">
              Develop efficient microcontroller-based systems tailored to your needs.
            </p>
            <a
              href="mailto:diyawandawan@gmail.com?subject=Inquiry about Microcontroller services"
              className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
            >
              Contact Us
            </a>
          </Card>
          <Card>
            <img className="rounded-sm mb-2" src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <h2 className="text-2xl font-bold">Pembuatan Website</h2>
            <p className="mt-2 mb-4">
              Get a professional and responsive website built to your specifications.
            </p>
            <a
              href="mailto:diyawandawan@gmail.com?subject=Inquiry about Pembuatan Website services"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Contact Us
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Services;
