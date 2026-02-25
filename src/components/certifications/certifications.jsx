import React from "react";
import { certifications } from "../../constants"; // Import the certifications data

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CERTIFICATIONS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My certifications showcase my commitment to continuous learning and professional development
        </p>
      </div>

      {/* Certifications Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* Certification Entries */}
        {certifications.map((cert, index) => (
          <div
            key={cert.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-start space-x-6">
                {/* Certification Logo/Image - Only show if image exists */}
                {cert.img && (
                  <div className="w-24 h-16 bg-white rounded-md overflow-hidden flex items-center justify-center p-2 flex-shrink-0">
                    <img
                      src={cert.img}
                      alt={cert.organization}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}

                {/* Certificate Title, Organization, and Date */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-xl font-semibold text-white">
                      {cert.title}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">
                      {cert.organization}
                    </h4>
                  </div>
                  {/* Date at the bottom */}
                  <p className="text-sm text-gray-500 mt-2">{cert.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-400 font-bold">Credential ID: {cert.credentialId}</p>
              <p className="mt-4 text-gray-400">{cert.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
