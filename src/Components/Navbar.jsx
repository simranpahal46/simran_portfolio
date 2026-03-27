import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#footer" },
  ];

  // Function to handle resume download
  const handleDownloadResume = () => {
    // Create a link to the PDF file
    const pdfUrl = "/simran Resume.pdf.pdf"; // Path to your PDF file in the public folder
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Simran_Pahal_Resume.pdf"; // Download file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="bg-gray-50 shadow-md sticky top-0 z-50 border-b border-teal-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Left side - Logo */}
          <div className="flex-shrink-0">
            <a href="#home">
              <h1 className="text-3xl font-bold text-teal-600 hover:text-teal-500 transition-all duration-300 cursor-pointer">
                SK
              </h1>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-teal-600 transition-all duration-300 font-medium hover:translate-y-[-2px]"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right side - Buttons and Social Icons */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Resume Button with Download */}
            <button 
              onClick={handleDownloadResume}
              className="px-5 py-2 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-500 transition-all duration-300 transform hover:scale-105 shadow-md flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </button>
            
            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/simranpahal46"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-teal-600 transition-all duration-300 hover:scale-110"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/simran-kaur-4742443a7/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-teal-600 transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-teal-600 focus:outline-none transition-colors duration-300"
            >
              {isOpen ? (
                <HiX className="text-2xl" />
              ) : (
                <HiMenu className="text-2xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-4 space-y-3 bg-gray-50 border-t border-teal-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-gray-700 hover:text-teal-600 hover:bg-gray-100 rounded-lg transition-all duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            
            {/* Mobile Resume Button with Download */}
            <div className="px-3 pt-2">
              <button 
                onClick={handleDownloadResume}
                className="w-full px-4 py-2 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-500 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Resume
              </button>
            </div>
            
            {/* Mobile Social Icons */}
            <div className="flex justify-center space-x-6 px-3 pt-4">
              <a
                href="https://github.com/simrankaur"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-teal-600 transition-all duration-300 hover:scale-110"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/simran-kaur-4742443a7/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-teal-600 transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}