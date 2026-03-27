import React from 'react';

export default function Hero() {
  const profile = {
    name: 'Simran Pahal',
    pos: 'Cyber Security Web Development',
    des: 'Passionate cybersecurity enthusiast and full-stack web developer dedicated to building secure, resilient web applications. Currently pursuing advanced training at Harton Advance Skill Centre, combining cutting-edge development practices with security-first principles to create robust digital solutions that protect against modern cyber threats.',
    skill: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Figma', 'Cloudinary', 'Postman', 'AWS', 'GitHub', 'JavaScript']
  }

  // Function to handle resume download
  const handleDownloadResume = () => {
    // Path to your PDF file in the public folder
    const pdfUrl = "/simran Resume.pdf.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Simran_Pahal_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to handle contact scroll
  const handleGetInTouch = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="bg-gray-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Text Content */}
          <div className="space-y-6">
            <div>
              <p className="text-teal-600 font-semibold text-lg mb-2">Welcome to My Portfolio</p>
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-4">
                Hi, I'm{' '}
                <span className="text-teal-600 bg-gradient-to-r from-teal-100 to-teal-50 px-2 rounded">
                  {profile.name}
                </span>
              </h1>
              <p className="text-xl text-gray-700 font-medium mb-4">{profile.pos}</p>
              <p className="text-gray-600 leading-relaxed text-lg">
                {profile.des}
              </p>
            </div>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={handleDownloadResume}
                className="px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-500 transition-all duration-300 transform hover:scale-105 shadow-md flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume
              </button>
              <button 
                onClick={handleGetInTouch}
                className="px-6 py-3 border-2 border-teal-600 text-teal-600 rounded-lg font-medium hover:bg-teal-600 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
              </button>
            </div>
            
            {/* Skills Section */}
            <div className="pt-6">
              <p className="text-gray-700 font-semibold mb-3">Tech Stack & Skills:</p>
              <div className="flex flex-wrap gap-2">
                {profile.skill.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-teal-100 hover:text-teal-600 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right side - Large Fully Rounded Circular Image */}
          <div className="flex justify-center items-center">
            <div className="relative">
              {/* Decorative background circle - larger */}
              <div className="absolute inset-0 bg-teal-100 rounded-full blur-2xl opacity-50 scale-110"></div>
              <div className="relative">
                {/* Thicker gradient border for larger image */}
                <div className="rounded-full p-2 bg-gradient-to-br from-teal-500 to-teal-600 shadow-2xl">
                  <img 
                    src="https://res.cloudinary.com/dpxcaxiuj/image/upload/v1768884484/WhatsApp_Image_2026-01-20_at_10.13.52_AM_ni6j6p.jpg"
                    alt="Simran Pahal - Cybersecurity Web Developer"
                    className="rounded-full w-96 h-96 object-cover"
                  />
                </div>
                {/* Institution Badge */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg px-5 py-2.5 min-w-[220px] text-center">
                  <p className="text-teal-600 font-semibold text-sm">Harton Advance Skill Centre</p>
                  <p className="text-gray-500 text-xs">Cybersecurity Web Development Program</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}