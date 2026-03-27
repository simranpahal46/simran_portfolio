import React from 'react';
import { 
  FaLaptopCode, 
  FaExternalLinkAlt, 
  FaGithub, 
  FaCode,
  FaLock,
  FaRocket,
  FaHeartbeat,
  FaCheckCircle,
  FaGraduationCap,
  FaSchool,
  FaGlobe,
  FaComments,
  FaStar,
  FaDatabase,
  FaServer
} from 'react-icons/fa';

export default function Project() {
  const projects = [
    {
      title: "Sqilo.com",
      description: "Educational platform offering courses and learning resources. Features include course management, student enrollment, video lectures, and interactive quizzes.",
      icon: <FaGraduationCap />,
      tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Cloudinary"],
      features: ["Course Management", "Video Streaming", "Quiz System", "Student Dashboard"],
      link: "https://sqilo.com",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      status: "Live",
      category: "Educational Platform"
    },
    {
      title: "HartronIndia.com",
      description: "Official website for Hartron Advance Skill Centre showcasing courses, certifications, and training programs with admin dashboard.",
      icon: <FaSchool />,
      tech: ["React.js", "Node.js", "MySQL", "Tailwind CSS", "AWS"],
      features: ["Course Catalog", "Admin Panel", "Student Portal", "Certificate Generation"],
      link: "https://hartronindia.com",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      status: "Live",
      category: "Institutional Website"
    },
    {
      title: "LMS HartronIndia.online",
      description: "Learning Management System for managing online courses, assignments, student progress tracking, and interactive learning materials.",
      icon: <FaGlobe />,
      tech: ["MERN Stack", "Socket.io", "Redux", "JWT", "Material-UI"],
      features: ["Course Management", "Assignment Submission", "Progress Tracking", "Live Classes"],
      link: "https://hartronindia.online",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      status: "Live",
      category: "Learning Management System"
    },
    {
      title: "Messaging App",
      description: "Real-time messaging application with instant messaging, group chats, file sharing, and end-to-end encryption for secure communication.",
      icon: <FaComments />,
      tech: ["React.js", "Node.js", "Socket.io", "MongoDB", "WebRTC"],
      features: ["Real-time Chat", "Group Messaging", "File Sharing", "Read Receipts"],
      link: "https://github.com",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      status: "In Development",
      category: "Communication App"
    }
  ];

  const stats = [
    { icon: <FaRocket />, value: "4", label: "Live Projects", color: "teal" },
    { icon: <FaCode />, value: "15+", label: "Technologies", color: "teal" },
    { icon: <FaCheckCircle />, value: "100%", label: "Client Satisfaction", color: "teal" },
    { icon: <FaHeartbeat />, value: "24/7", label: "Live Support", color: "teal" }
  ];

  const techStack = [
    "React.js", "Node.js", "Express.js", "MongoDB", "MySQL", 
    "Socket.io", "Tailwind CSS", "AWS", "Cloudinary", "JWT", 
    "Redux", "Redis", "Bcrypt", "Material-UI", "WebRTC"
  ];

  return (
    <div id="projects" className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-100 px-4 py-2 rounded-full mb-4">
            <FaLaptopCode className="text-teal-600" />
            <span className="text-teal-700 text-sm font-medium">Featured Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
              My Live Projects
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real-world projects built at Hartron Advance Skill Centre, showcasing my expertise in web development
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-teal-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-4 text-center border border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all duration-300">
              <div className="inline-flex p-3 bg-teal-100 rounded-full mb-2">
                <div className="text-teal-500 text-xl">{stat.icon}</div>
              </div>
              <div className="text-2xl font-bold text-teal-600">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl border border-gray-200 hover:border-teal-300 transition-all duration-500 hover:shadow-2xl hover:shadow-teal-100 overflow-hidden transform hover:-translate-y-2"
            >
              {/* Status Badge */}
              <div className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-medium ${
                project.status === 'Live' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
              }`}>
                {project.status === 'Live' ? '● Live' : '● In Development'}
              </div>

              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Header */}
              <div className={`p-6 ${project.bgColor} border-b border-gray-100`}>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <div className="text-2xl text-teal-500">{project.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                    <p className="text-gray-500 text-xs mt-1">{project.category}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-500 mb-2">TECH STACK</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 rounded-md text-xs text-gray-600">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-gray-500 mb-2">KEY FEATURES</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, i) => (
                      <span key={i} className="px-2 py-1 bg-teal-50 rounded-md text-xs text-teal-600">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links - WORKING BUTTONS */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium hover:bg-teal-700 transition-all duration-300 hover:scale-105 cursor-pointer"
                    style={{ cursor: 'pointer' }}
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    View Project
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-teal-600 text-teal-600 rounded-lg text-sm font-medium hover:bg-teal-50 transition-all duration-300 hover:scale-105 cursor-pointer"
                    style={{ cursor: 'pointer' }}
                  >
                    <FaGithub className="text-sm" />
                    Source Code
                  </a>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-teal-50 to-transparent rounded-tl-full pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Tech Stack Overview */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-teal-400 px-6 py-2 rounded-full mb-4">
              <FaCode className="text-white text-sm" />
              <span className="text-white text-sm font-medium">TECHNOLOGIES USED</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">My Tech Arsenal</h3>
          </div>
          
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="group relative px-4 py-2 bg-gray-50 rounded-full border border-gray-200 hover:border-teal-300 transition-all duration-300 hover:shadow-md"
                >
                  <span className="text-gray-700 text-sm group-hover:text-teal-600 transition-colors">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-500 rounded-2xl p-8 text-white text-center">
          <div className="inline-flex p-3 bg-white/20 rounded-full mb-4">
            <FaRocket className="text-3xl" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Making an Impact</h3>
          <p className="text-teal-100 max-w-2xl mx-auto leading-relaxed">
            All projects are live and serving real users, demonstrating my ability to build 
            production-ready applications with modern technologies and security best practices.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-white" />
              <span className="text-sm">100% Responsive</span>
            </div>
            <div className="flex items-center gap-2">
              <FaLock className="text-white" />
              <span className="text-sm">Secure by Design</span>
            </div>
            <div className="flex items-center gap-2">
              <FaHeartbeat className="text-white" />
              <span className="text-sm">Performance Optimized</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}