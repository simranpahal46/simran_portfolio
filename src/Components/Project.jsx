import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaLaptopCode, 
  FaGraduationCap, 
  FaBuilding, 
  FaComments,
  FaCode,
  FaExternalLinkAlt,
  FaGithub,
  FaRocket,
  FaEye,
  FaShieldAlt,
  FaSchool,
  FaGlobe,
  FaServer,
  FaDatabase,
  FaCloudUploadAlt,
  FaAward,
  FaMedal,
  FaTrophy,
  FaUsers,
  FaChartLine,
  FaBrain,
  FaBookOpen,
  FaLightbulb,
  FaHeart,
  FaInfinity,
  FaSpinner
} from 'react-icons/fa';
import { FiBookOpen, FiGlobe } from 'react-icons/fi';

const Project = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "Sqilo.com",
      type: "Educational Platform",
      company: "Hartron",
      icon: <FaGraduationCap />,
      color: "from-teal-500 to-cyan-500",
      status: "Live",
      date: "2025",
      description: "Comprehensive educational platform with interactive learning experiences, course management, and student engagement features.",
      features: ["Interactive Learning", "Course Management", "Progress Tracking", "Quiz Engine", "Video Delivery"],
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "AWS", "Tailwind CSS"],
      liveLink: "https://sqilo.com",
      githubLink: "https://github.com",
      role: "Full Stack Developer",
      contributions: [
        "Developed responsive UI components",
        "Implemented secure authentication",
        "Built RESTful APIs",
        "Optimized database queries",
        "Integrated payment gateway"
      ]
    },
    {
      id: 2,
      title: "HartronIndia.com",
      type: "Corporate Website",
      company: "Hartron",
      icon: <FaSchool />,
      color: "from-teal-500 to-cyan-500",
      status: "Live",
      date: "2025",
      description: "Official corporate website showcasing services, achievements, and information portal for stakeholders.",
      features: ["Service Portfolio", "News & Updates", "Contact Management", "SEO Optimized", "Multi-language"],
      technologies: ["React.js", "Node.js", "MySQL", "Tailwind CSS", "AWS", "JWT"],
      liveLink: "https://hartronindia.com",
      githubLink: "https://github.com",
      role: "Frontend Developer",
      contributions: [
        "Created responsive layouts",
        "Implemented CMS integration",
        "Optimized performance",
        "Added SEO best practices",
        "Ensured accessibility"
      ]
    },
    {
      id: 3,
      title: "HartronIndia.Online",
      type: "Learning Management System",
      company: "Hartron",
      icon: <FiBookOpen />,
      color: "from-teal-500 to-cyan-500",
      status: "Live",
      date: "2025",
      description: "Advanced LMS for delivering training programs, tracking progress, and managing educational content.",
      features: ["Course Enrollment", "Progress Dashboard", "Certificate Generation", "Assignments", "Instructor Management"],
      technologies: ["React.js", "Redux", "Node.js", "MongoDB", "Express.js", "Socket.io"],
      liveLink: "https://hartronindia.online",
      githubLink: "https://github.com",
      role: "Full Stack Developer",
      contributions: [
        "Developed course management",
        "Built real-time tracking",
        "Implemented certificate generation",
        "Created admin dashboard",
        "Optimized database architecture"
      ]
    },
    {
      id: 4,
      title: "Secure Messaging App",
      type: "Communication Platform",
      company: "Hartron",
      icon: <FaComments />,
      color: "from-teal-500 to-cyan-500",
      status: "Live",
      date: "2025",
      description: "Secure enterprise messaging with end-to-end encryption for confidential internal communication.",
      features: ["End-to-End Encryption", "Real-time Messaging", "File Sharing", "Group Chats", "Message History"],
      technologies: ["React.js", "Node.js", "Socket.io", "MongoDB", "WebRTC", "JWT"],
      liveLink: "https://github.com",
      githubLink: "https://github.com/simranpahal46",
      role: "Full Stack Developer",
      contributions: [
        "Implemented encryption protocols",
        "Built real-time chat features",
        "Developed responsive UI",
        "Created secure file sharing",
        "Optimized real-time data"
      ]
    }
  ];

  const learningPhilosophy = [
    { 
      icon: <FaBrain />, 
      title: "Continuous Growth", 
      quote: "Every day is an opportunity to learn something new. I embrace challenges as stepping stones to mastery.",
      color: "from-teal-500 to-cyan-500"
    },
    { 
      icon: <FaBookOpen />, 
      title: "Security First", 
      quote: "Building with security in mind isn't an afterthought—it's the foundation of every project I create.",
      color: "from-cyan-500 to-teal-500"
    },
    { 
      icon: <FaLightbulb />, 
      title: "Innovation Through Curiosity", 
      quote: "The best solutions come from asking 'what if?' and exploring the unknown with enthusiasm.",
      color: "from-teal-500 to-emerald-500"
    },
    { 
      icon: <FaHeart />, 
      title: "User-Centric Design", 
      quote: "Technology serves people. I build experiences that are intuitive, accessible, and meaningful.",
      color: "from-emerald-500 to-teal-500"
    },
    { 
      icon: <FaInfinity />, 
      title: "Lifelong Learning", 
      quote: "The tech landscape evolves rapidly—staying curious and adaptable is my superpower.",
      color: "from-teal-500 to-cyan-500"
    },
    { 
      icon: <FaSpinner />, 
      title: "Resilience & Adaptability", 
      quote: "Every bug fixed, every challenge overcome—resilience turns obstacles into opportunities.",
      color: "from-cyan-500 to-teal-500"
    }
  ];

  const filters = [
    { id: 'all', label: 'All', icon: <FaLaptopCode /> },
    { id: 'web', label: 'Web', icon: <FiGlobe /> },
    { id: 'education', label: 'Education', icon: <FaGraduationCap /> },
    { id: 'security', label: 'Security', icon: <FaShieldAlt /> }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => {
        if (activeFilter === 'web') return [1, 2, 3].includes(project.id);
        if (activeFilter === 'education') return [1, 3].includes(project.id);
        if (activeFilter === 'security') return [4].includes(project.id);
        return true;
      });

  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-teal-100 border border-teal-200 rounded-full px-4 py-2 mb-4">
            <FaRocket className="text-teal-600 text-sm" />
            <span className="text-sm font-medium text-teal-700">Live Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Professional Projects
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real-world applications developed at Hartron Advance Skill Centre
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-all duration-300 text-sm ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter.icon}
              <span>{filter.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
              >
                {/* Header with Gradient */}
                <div className={`p-5 bg-gradient-to-r ${project.color} text-white`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/20 rounded-lg text-xl">
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{project.title}</h3>
                        <p className="text-xs text-white/80">{project.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 bg-white/20 px-3 py-1 rounded-full text-xs">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                      <span>{project.status}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                    <FaBuilding className="text-teal-600 text-xs" />
                    <span>{project.company}</span>
                    <span>•</span>
                    <span>{project.date}</span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>

                  {/* Role */}
                  <div className="mb-3">
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 mb-2">
                      <FaCode className="text-teal-600 text-xs" />
                      <span>Role: {project.role}</span>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-500 mb-2">TECH STACK</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-teal-50 text-teal-700 rounded-md text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-5">
                    <h4 className="text-xs font-semibold text-gray-500 mb-2">KEY FEATURES</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-3 border-t border-gray-100">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:from-teal-700 transition"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 border border-teal-600 text-teal-600 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-teal-50 transition"
                    >
                      <FaGithub className="text-sm" />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Learning Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-teal-100 px-4 py-2 rounded-full mb-3">
              <FaBrain className="text-teal-600 text-sm" />
              <span className="text-sm font-medium text-teal-700">My Learning Philosophy</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">The Principles That Guide Me</h3>
            <p className="text-gray-500 text-sm mt-1">How I approach challenges and growth</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {learningPhilosophy.map((philosophy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg transition-all group"
              >
                <div className={`inline-flex p-3 bg-gradient-to-r ${philosophy.color} rounded-lg mb-3 group-hover:scale-110 transition-transform`}>
                  <div className="text-white text-xl">{philosophy.icon}</div>
                </div>
                <h4 className="font-bold text-gray-800 text-base mb-2">{philosophy.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed italic">"{philosophy.quote}"</p>
                <div className="mt-3 w-12 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full group-hover:w-20 transition-all"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white border border-gray-200 rounded-xl p-6 mb-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
            <div>
              <div className="text-3xl font-bold text-teal-600">4</div>
              <div className="text-sm text-gray-600 mt-1">Live Projects</div>
              <div className="text-xs text-gray-400">Deployed & Running</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600">15+</div>
              <div className="text-sm text-gray-600 mt-1">Technologies</div>
              <div className="text-xs text-gray-400">Modern Stack</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600">100%</div>
              <div className="text-sm text-gray-600 mt-1">Client Satisfaction</div>
              <div className="text-xs text-gray-400">Positive Feedback</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600">24/7</div>
              <div className="text-sm text-gray-600 mt-1">Live Support</div>
              <div className="text-xs text-gray-400">Continuous Monitoring</div>
            </div>
          </div>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl p-6 text-white text-center"
        >
          <div className="inline-flex p-2 bg-white/20 rounded-full mb-3">
            <FaChartLine className="text-xl" />
          </div>
          <p className="text-sm leading-relaxed max-w-2xl mx-auto">
            "Every line of code is a step forward in my journey to build secure, scalable, and innovative solutions. 
            I believe that great developers aren't born—they're built through curiosity, persistence, and a passion for learning."
          </p>
          <div className="mt-3 text-xs text-teal-100">
            — Simran Kaur, Full Stack Developer & Cybersecurity Enthusiast
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;