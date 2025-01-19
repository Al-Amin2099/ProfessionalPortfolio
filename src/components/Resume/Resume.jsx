import React, { useState } from "react";
import profResume from "../../assets/ResumeAssets/Tony Amin - Resume.pdf";
import fileIcon from "../../assets/ResumeAssets/folderIcon.png"

const Resume = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <section className="bg-primary text-white pb-12">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div data-aos="zoom-in">
              <img
                src={fileIcon}
                alt=""
                className="w-full sm:w-[60%] mx-auto max-h-[250px] object-contain"
              />
            </div>
            <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-amber-600 border-b-amber-600">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-amber-600 uppercase"
              >
                My Mission
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-5xl"
              >
                Resume
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
                My mission is to continue growing and learning as an Engineer. Attached is my resume for more information. Thank You!
              </p>
              <button
                onClick={toggleModal}
                data-aos="fade-up"
                data-aos-delay="900"
                className="bg-amber-400 text-gray-800 hover:bg-amber-500 px-4 py-1 rounded-md duration-200"
              >
                View
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg w-11/12 sm:w-3/4 md:w-1/2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-amber-600">My Resume</h2>
              <button
                onClick={toggleModal}
                className="text-xl font-semibold text-amber-600"
              >
                X
              </button>
            </div>
            <div className="mb-4">
              <iframe
                src={profResume}
                width="100%"
                height="600px"
                title="Resume"
              />
            </div>
            <a
              href={profResume}
              download
              className="text-amber-500 underline"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Resume;
