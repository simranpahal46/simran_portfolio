import React from 'react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaPhone,
  FaHeart,
  FaCode,
  FaRocket,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaShieldAlt
} from 'react-icons/fa';
import { MdCopyright } from 'react-icons/md';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    { icon: <FaGithub />, label: "GitHub", value: "https://github.com/simranpahal46", link: "https://github.com/simranpahal46", color: "hover:text-gray-700" },
    { icon: <FaLinkedin />, label: "LinkedIn", value: "https://www.linkedin.com/in/simran-kaur-4742443a7/", link: "https://www.linkedin.com/in/simran-kaur-4742443a7/", color: "hover:text-blue-600" },
    { icon: <FaEnvelope />, label: "Email", value: "simranpahal46@gmail.com", link: "simranpahal46@gmail.com", color: "hover:text-red-500" },
    { icon: <FaPhone />, label: "Phone", value: "+91 82950 83087", link: "tel:+918295083087", color: "hover:text-green-500" }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" }
  ];

  const expertise = [
    "Cybersecurity", "Web Development", "MERN Stack", "Security Testing"
  ];

  return (
    <footer id='footer' className="bg-gradient-to-br from-gray-50 to-white border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg">
                <FaShieldAlt className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                Simran Kaur
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Cybersecurity & Web Development enthusiast building secure, scalable, and innovative digital solutions with modern technologies.
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <FaMapMarkerAlt className="text-teal-500" />
              <span>Hartron Advance Skill Centre</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <FaCode className="text-teal-500" />
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-600 hover:text-teal-600 text-sm transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-teal-500 rounded-full"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <FaEnvelope className="text-teal-500" />
              Contact Info
            </h4>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  target={contact.label !== "Email" && contact.label !== "Phone" ? "_blank" : undefined}
                  rel={contact.label !== "Email" && contact.label !== "Phone" ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-3 text-gray-600 ${contact.color} transition-all duration-300 group`}
                >
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-teal-50 transition-colors">
                    <span className="text-sm text-teal-600">{contact.icon}</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">{contact.label}</p>
                    <p className="text-sm">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Expertise */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <FaRocket className="text-teal-500" />
              Expertise
            </h4>
            <div className="flex flex-wrap gap-2">
              {expertise.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 hover:bg-teal-500 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="pt-4 mt-2 border-t border-gray-200">
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <FaCalendarAlt className="text-teal-500" />
                <span>Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <MdCopyright className="text-sm" />
            <span>{currentYear} Simran Kaur. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-xs">Made with</span>
            <FaHeart className="text-red-500 text-xs animate-pulse" />
            <span className="text-gray-400 text-xs">at Hartron Advance Skill Centre</span>
          </div>
          
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/simranpahal46"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 hover:scale-110 transition-all duration-300 group"
            >
              <FaGithub className="text-gray-600 group-hover:text-gray-900 text-sm" />
            </a>
            <a
              href="https://www.linkedin.com/in/simran-kaur-4742443a7/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 hover:scale-110 transition-all duration-300 group"
            >
              <FaLinkedin className="text-gray-600 group-hover:text-blue-600 text-sm" />
            </a>
            <a
              href="simranpahal46@gmail.com"
              className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 hover:scale-110 transition-all duration-300 group"
            >
              <FaEnvelope className="text-gray-600 group-hover:text-red-500 text-sm" />
            </a>
            <a
              href="tel:+918295083087"
              className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 hover:scale-110 transition-all duration-300 group"
            >
              <FaPhone className="text-gray-600 group-hover:text-green-500 text-sm" />
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-xs">
            🔒 Committed to building secure and privacy-focused applications
          </p>
        </div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="h-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400"></div>
    </footer>
  );
}