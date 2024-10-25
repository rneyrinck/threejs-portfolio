import { clientProjects } from '../constants/index.js';

const Clients = () => {
  return (
    <section className="c-space my-20">
      <h3 className="head-text">Explore My Projects</h3>
      <p className="text-white-600 mb-8">
        Below is a selection of projects I've worked on. These projects are proprietary, but I'm happy to provide more information upon request.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 project-container">
        {clientProjects.map((item) => (
          <div key={`project-${item.id}`} className="relative group project-card bg-gray-800 rounded-lg shadow-md overflow-hidden">

            {/* Image Section with Bottom-Origin Gradient Overlay */}
            <div className="relative">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover transition duration-300 ease-in-out group-hover:opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-70"></div>
              <h4 className="absolute bottom-6 left-4 text-xl font-semibold text-white transition duration-300 ease-in-out">
                {item.title}
              </h4>
            </div>

            {/* Text Overlay - Hidden until hover */}
            <div className="absolute inset-0 p-6 flex flex-col justify-center items-center text-center bg-gray-900 bg-opacity-90 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
              <h4 className="font-semibold text-white text-2xl mb-2">{item.title}</h4>
              <div className="flex flex-col space-y-2">
                <p className="font-medium text-white-800">{item.category}</p>
                <p className="text-white-500 md:text-base text-sm font-light">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
