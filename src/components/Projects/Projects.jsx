import React, { useState, useRef, useEffect } from "react";
import { FaGithub } from "react-icons/fa"; // Importing GitHub icon from react-icons
import roverLogo from "../../assets/ProjectsAssets/TitanRover/roverLogo.jpg";
import roverImage1 from "../../assets/ProjectsAssets/TitanRover/rover1.png";
import roverImage2 from "../../assets/ProjectsAssets/TitanRover/rover2.png";
import roverImage3 from "../../assets/ProjectsAssets/TitanRover/rover3.png";

import centralNodeLogo from "../../assets/ProjectsAssets/CentralNode/fireProjectLogo.jpg";
import centralImage1 from "../../assets/ProjectsAssets/CentralNode/Schematic.png";
import centralImage2 from "../../assets/ProjectsAssets/CentralNode/pcb3d.png";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const modalRef = useRef(null);

  const roverImages = [roverImage1, roverImage2, roverImage3];
  const centralNodeImages = [centralImage1, centralImage2];

  const toggleModal = (index) => {
    setCurrentProjectIndex(index);
    setIsModalOpen(!isModalOpen);
  };

  const closeModalOnOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsModalOpen(false);
    }
  };

  const nextImage = () => {
    const images = currentProjectIndex === 0 ? roverImages : centralNodeImages;
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    const images = currentProjectIndex === 0 ? roverImages : centralNodeImages;
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Automatically change images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentProjectIndex !== null) {
        const images = currentProjectIndex === 0 ? roverImages : centralNodeImages;
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentProjectIndex]);

  const projectDetails = [
    {
      title: "Titan Rover",
      description:
        "Titan Rover is a student-led project at California State University, Fullerton (CSUF), focusing on designing and building a fully functional autonomous rover capable of operating in challenging environments.",
      logo: roverLogo,
      images: roverImages,
      githubLink: "https://github.com/titan-rover/2023-4_Rover_Code_Base", // GitHub link for Titan Rover
      details: [
        "• Spearheading development of robotic drivetrain and robotic arm, implementing CAN protocol.",
        "• Managing cross-functional teams, and coordinating project timelines and deliverables.",
        "• Communicating technical concepts effectively to team members and stakeholders.",
      ],
      technicalSkills: [
        "Programming Languages: C++, Python, ROS",
        "Software: MATLAB, Gazebo, SolidWorks",
        "Hardware: CAN Protocol, Motor Control, Autonomous Navigation",
        "Leadership: Cross-functional Team Management, Project Planning",
      ],
    },
    {
      title: "Central Node",
      description:
        "Masters' Thesis Project - Designing a PCB for a new central node. In collaboration with the Engineering Wildfire Mitigation project with Dr. Ankita Mohapatra",
      logo: centralNodeLogo,
      images: centralNodeImages,
      githubLink: "https://github.com/Al-Amin2099/F.I.R.E.-Graduate-Thesis-Project", // GitHub link for Central Node
      details: [
        "• Designing a custom PCB for a new central node, integrating wind speed and direction sensors for real-time monitoring",
        "• Optimized power management by incorporating new solar panels and battery systems",
        "• Integrating and testing RS485 communication protocols for reliable data transmission",
        "• Improved system scalability and modularity by designing the PCB to accommodate additional sensors and future hardware",
      ],
      technicalSkills: [
        "Programming Languages: C, c++",
        "Software: KiCAD, ESPIDF",
        "Hardware: PCB Design, Power Management, RS485 Protocol, I2C, UART",
      ],
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
                  onClick={() => toggleModal(index)}
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
      {isModalOpen && currentProjectIndex !== null && (
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
                {projectDetails[currentProjectIndex].title}
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
                  {projectDetails[currentProjectIndex].description}
                </p>
                <ul className="text-gray-800 mt-4">
                  {projectDetails[currentProjectIndex].details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
                <p className="text-gray-800 mt-4">
                  <strong>Technical / Leadership Skills:</strong><br />
                  {projectDetails[currentProjectIndex].technicalSkills.map((skill, idx) => (
                    <span key={idx}>{skill}<br /></span>
                  ))}
                </p>
              </div>
              {/* Image Section */}
              <div className="flex flex-col items-center">
                <img
                  src={
                    currentProjectIndex === 0
                      ? roverImages[currentImageIndex]
                      : centralNodeImages[currentImageIndex]
                  }
                  alt="Project Image"
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
            {/* Related Links Section */}
            <div className="mt-6">
              <h3 className="text-xl font-bold text-amber-600 mb-2">Related Links:</h3>
              <ul className="text-gray-800">
                <li>
                  <a
                    href={projectDetails[currentProjectIndex].githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <FaGithub className="inline mr-2" />
                    GitHub Repository
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
