import React, { useState } from "react";
import profile from "../../assets/HeroAssets/profile.jpg"; 
import profile2 from "../../assets/HeroAssets/profile2.jpg";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="bg-black/35 h-full relative">
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="text-white space-y-6 lg:pr-36">
            <h1 data-aos="fade-up" className="text-5xl font-bold leading-tight">
              Allow Me To Reintroduce Myself!
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-lg leading-relaxed text-gray-200"
            >
              My name is Tony, an engineer passionate about robotics, aerospace, and creating innovative solutions
              that push technological boundaries. With expertise in embedded systems, mobility design,
              and micro-controller integration, I thrive at the intersection of hardware and software.
              From developing autonomous robotics systems to advancing aerospace applications, I bring
              creativity, adaptability, and technical skill to every challenge, driven by a commitment
              to building impactful and cutting-edge technology.
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="500"
              onClick={toggleModal}
              className="bg-amber-500 text-gray-800 hover:bg-amber-600 px-6 py-2 rounded-md duration-200 text-lg"
            >
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
      <img
        //src={MountainPng}
        alt=""
        className="absolute right-0 bottom-0 w-full brightness-50 z-10"
      />
      <div className="absolute bottom-0 z-30 right-0 w-full bg-gradient-to-b from-transparent from-10% to-primary to-90% h-[20px] sm:h-[50px] md:[60px]"></div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-8 space-y-6 w-[95%] max-w-4xl text-center">
            {/* Profile Picture */}
            <img
              src={profile2}  // Path to your profile image
              alt="Full Profile"
              className="rounded-full w-32 h-32 object-cover mx-auto border-4 border-amber-400"
            />
            <h2 className="text-2xl font-bold text-gray-800">Tony Amin</h2>
            
            {/* Education Details */}
            <div className="text-left space-y-4 text-gray-800"> {/* Darker text for better contrast */}
              <div>
                <h3 className="font-semibold text-xl">College of Engineering and Computer Science, California State University, Fullerton (CSUF)</h3>
                <p className="text-lg">Fullerton, CA</p>
                <p className="text-lg">Master of Science - Major in Computer Engineering (Expected May 2025)</p>
                <p className="text-lg">Cumulative GPA: 3.3/4.0</p>
                <p className="text-lg font-semibold">Relevant Coursework:</p>
                <ul className="list-disc pl-5">
                  <li>RTOS</li>
                  <li>Analysis of Random Signals</li>
                  <li>Hardware Security</li>
                  <li>FPGA Design and VHDL</li>
                  <li>Verilog</li>
                  <li>CMOS</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-xl">Howard R. Hughes College of Engineering, University of Nevada, Las Vegas (UNLV)</h3>
                <p className="text-lg">Las Vegas, NV</p>
                <p className="text-lg">Bachelor of Science - Major in Computer Science; Minor in Mathematics (Graduated May 2021)</p>
                <p className="text-lg">Cumulative GPA: 3.25/4.0; Dean’s List (2019-2021)</p>
                <p className="text-lg font-semibold">Relevant Coursework:</p>
                <ul className="list-disc pl-5">
                  <li>Data Analysis</li>
                  <li>Software Engineering</li>
                  <li>Operating Systems</li>
                  <li>Algorithms</li>
                  <li>Physics</li>
                  <li>Discrete Math</li>
                </ul>
              </div>
            </div>

            <button
              onClick={toggleModal}
              className="bg-amber-500 text-gray-800 hover:bg-amber-600 px-6 py-2 rounded-md duration-200 text-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
