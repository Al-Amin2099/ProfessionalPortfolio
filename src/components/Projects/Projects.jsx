import React, { useState, useRef } from "react";
import roverLogo from "../../assets/ProjectsAssets/TitanRover/roverLogo.jpg";
import roverImage1 from "../../assets/ProjectsAssets/TitanRover/rover1.png";
import roverImage2 from "../../assets/ProjectsAssets/TitanRover/rover2.png";
import roverImage3 from "../../assets/ProjectsAssets/TitanRover/rover3.png";
import roverImage4 from "../../assets/ProjectsAssets/TitanRover/rover4.png";
// import project2Logo from "../../assets/ProjectsAssets/Project2/project2Logo.jpg";
// import project3Logo from "../../assets/ProjectsAssets/Project3/project3Logo.jpg";
// import project4Logo from "../../assets/ProjectsAssets/Project4/project4Logo.jpg";
// import project5Logo from "../../assets/ProjectsAssets/Project5/project5Logo.jpg";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const modalRef = useRef(null);

  const images = [roverImage1, roverImage2, roverImage3, roverImage4];

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModalOnOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsModalOpen(false);
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  React.useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, []);

  const projectDetails = [
    {
      title: "Titan Rover",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos molestiae reprehenderit expedita corporis, non doloremque.",
      logo: roverLogo,
    },
    {
      title: "Project 2",
      description:
        "A second project with swapped logo and text placements. Details about this project.",
      logo: roverLogo,
    },
    {
      title: "Project 3",
      description:
        "Third project details with alternating layout and relevant information.",
      logo: roverLogo,
    },
    {
      title: "Project 4",
      description:
        "Fourth project information with alternating layout placements.",
      logo: roverLogo,
    },
    {
      title: "Project 5",
      description:
        "Fifth project information showcasing final alternation in layout.",
      logo: roverLogo,
    },
  ];

  return (
    <>
      {projectDetails.map((project, index) => (
        <section className={`bg-primary text-white py-20`} key={index}>
          <div className="container">
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 gap-4 items-center ${
                index % 2 === 0 ? "" : "sm:grid-cols-2-reverse"
              }`}
            >
              {/* Text Section */}
              <div
                className={`space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-amber-600 border-b-amber-600`}
              >
                <p
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="text-amber-600 uppercase"
                >
                  Project {index + 1}:
                </p>
                <h1
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="uppercase text-5xl"
                >
                  {project.title}
                </h1>
                <p data-aos="fade-up" data-aos-delay="700">
                  {project.description}
                </p>
                <button
                  onClick={toggleModal}
                  data-aos="fade-up"
                  data-aos-delay="900"
                  className="bg-amber-400 text-gray-800 hover:bg-amber-500 px-4 py-1 rounded-md duration-200"
                >
                  View More
                </button>
              </div>
              {/* Image Section */}
              <div data-aos="zoom-in">
                <img
                  src={project.logo}
                  alt={`${project.title} Logo`}
                  className="w-full sm:w-[80%] mx-auto max-h-[350px] object-contain"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Modal with Slideshow */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModalOnOutsideClick}
        >
          <div
            ref={modalRef}
            className="bg-white p-8 rounded-lg w-11/12 sm:w-[70%] md:w-[60%] lg:w-[50%] max-h-[90%] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-amber-600">
                Titan Rover - Controls Mobility Team Lead
              </h2>
              <button
                onClick={toggleModal}
                className="text-xl font-semibold text-amber-600"
              >
                X
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Text Section */}
              <div>
                <p className="text-gray-800">
                  More details about the Titan Rover project. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              {/* Image Section */}
              <div className="flex flex-col items-center">
                <img
                  src={images[currentImageIndex]}
                  alt="Rover Project"
                  className="max-w-full max-h-[400px] object-contain mb-4"
                />
                <div className="flex justify-between w-full">
                  <button
                    onClick={prevImage}
                    className="text-3xl text-amber-600 hover:text-amber-800 px-2"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextImage}
                    className="text-3xl text-amber-600 hover:text-amber-800 px-2"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
