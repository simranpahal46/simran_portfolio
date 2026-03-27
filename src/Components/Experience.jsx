import React from 'react';
import { 
  FaGraduationCap, 
  FaBriefcase, 
  FaCalendarAlt,
  FaShieldAlt,
  FaCode,
  FaAward,
  FaStar,
  FaTrophy,
  FaRocket,
  FaLaptopCode,
  FaClock,
  FaBug,
  FaLock,
  FaNetworkWired,
  FaServer,
  FaCheckCircle,
  FaMedal,
  FaCrown,
  FaHeartbeat,
  FaBrain,
  FaChartLine
} from 'react-icons/fa';
import { MdSecurity, MdVerified, MdOutlineWork, MdSpeed } from 'react-icons/md';

export default function Exper() {
  const experiences = [
    {
      type: "education",
      title: "Cyber Security & Web Development",
      institution: "Hartron Advance Skill Centre",
      date: "Nov 1, 2025 - Present",
      icon: <FaShieldAlt />,
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
      description: "Comprehensive training in cybersecurity principles, web application security, and full-stack development with security-first approach",
      skills: ["Network Security", "Web Hacking", "React.js", "Node.js", "Penetration Testing", "Security Testing"]
    },
    {
      type: "internship",
      title: "Cybersecurity Intern",
      institution: "Hartron Advance Skill Centre",
      date: "Mar 10, 2026 - Present",
      icon: <FaBriefcase />,
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
      description: "Hands-on experience in cybersecurity operations, vulnerability assessment, and implementing security best practices in real-world projects",
      skills: ["Vulnerability Assessment", "Security Audits", "Risk Analysis", "Incident Response", "Security Tools", "Threat Detection"]
    }
  ];

  const highlights = [
    { icon: <FaShieldAlt />, title: "Cyber Security Expert", desc: "Specialized in web & app security", color: "teal" },
    { icon: <FaBug />, title: "Vulnerability Assessment", desc: "Identifying security flaws", color: "cyan" },
    { icon: <FaCode />, title: "Full-Stack Developer", desc: "MERN stack with security focus", color: "teal" },
    { icon: <FaLock />, title: "Security First Approach", desc: "OWASP compliant coding", color: "emerald" }
  ];

  const certifications = [
    { name: "Certified Ethical Hacker", issuer: "EC-Council", status: "In Progress", icon: <FaMedal /> },
    { name: "Web Security Fundamentals", issuer: "Hartron", status: "Completed", icon: <MdVerified /> },
    { name: "MERN Stack Development", issuer: "Hartron", status: "In Progress", icon: <FaCheckCircle /> }
  ];

  const upcomingGoals = [
    { goal: "OSCP Certification", deadline: "Dec 2026", icon: <FaTrophy /> },
    { goal: "Bug Bounty Programs", deadline: "Ongoing", icon: <FaBug /> },
    { goal: "Cloud Security (AWS)", deadline: "Nov 2026", icon: <FaServer /> }
  ];

  return (
    <div id='experience' className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-100 px-4 py-2 rounded-full mb-4">
            <FaGraduationCap className="text-teal-600" />
            <span className="text-teal-700 text-sm font-medium">My Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Experience & Education
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Building expertise in cybersecurity and web development at Hartron Advance Skill Centre
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Timeline Experience */}
        <div className="relative mb-20">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-teal-500 via-cyan-500 to-emerald-500"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}>
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-teal-500 z-10"></div>
              
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className={`ml-16 md:ml-0 group bg-white rounded-2xl border border-gray-200 hover:border-teal-300 transition-all duration-300 hover:shadow-xl overflow-hidden`}>
                  {/* Header */}
                  <div className={`p-6 ${exp.bgColor} border-b border-gray-100`}>
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                        <div className={`text-2xl text-${exp.color.split('-')[1]}-500`}>{exp.icon}</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{exp.title}</h3>
                        <p className="text-gray-500 text-sm">{exp.institution}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <FaCalendarAlt className="text-teal-500 text-sm" />
                      <span className="text-gray-600 text-sm">{exp.date}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{exp.description}</p>
                    
                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-100 rounded-md text-xs text-gray-600 hover:bg-teal-100 hover:text-teal-700 transition-colors">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Empty spacer for alignment */}
              <div className="flex-1 hidden md:block"></div>
            </div>
          ))}
        </div>

        {/* Key Highlights */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 px-6 py-2 rounded-full mb-4">
              <FaStar className="text-white text-sm" />
              <span className="text-white text-sm font-medium">KEY HIGHLIGHTS</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">What I've Achieved</h3>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-4 border border-gray-200 hover:border-teal-300 transition-all duration-300 hover:shadow-lg text-center"
              >
                <div className={`inline-flex p-3 bg-${highlight.color}-100 rounded-xl group-hover:scale-110 transition-transform mb-3`}>
                  <div className={`text-${highlight.color}-500 text-2xl`}>{highlight.icon}</div>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm">{highlight.title}</h4>
                <p className="text-gray-500 text-xs mt-1">{highlight.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Goals Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Certifications Card */}
          <div className="bg-white rounded-2xl border border-gray-200 hover:border-teal-300 transition-all duration-300 hover:shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-lg">
                  <FaMedal className="text-white text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Certifications</h3>
                  <p className="text-teal-100 text-sm">Professional credentials</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg mb-3 last:mb-0 hover:bg-teal-50 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="text-teal-500 text-xl">{cert.icon}</div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">{cert.name}</p>
                      <p className="text-gray-500 text-xs">{cert.issuer}</p>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    cert.status === 'Completed' ? 'bg-green-100 text-green-700' :
                    cert.status === 'In Progress' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {cert.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Goals Card */}
          <div className="bg-white rounded-2xl border border-gray-200 hover:border-teal-300 transition-all duration-300 hover:shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-cyan-500 to-teal-500 p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-lg">
                  <FaRocket className="text-white text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Upcoming Goals</h3>
                  <p className="text-teal-100 text-sm">What's next on my journey</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              {upcomingGoals.map((goal, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg mb-3 last:mb-0 hover:bg-teal-50 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="text-teal-500 text-xl">{goal.icon}</div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">{goal.goal}</p>
                      <p className="text-gray-500 text-xs">Target: {goal.deadline}</p>
                    </div>
                  </div>
                  <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                </div>
              ))}
              <div className="mt-4 p-3 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg">
                <p className="text-xs text-gray-600 text-center">
                  🎯 "Setting ambitious goals and working consistently to achieve them"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote/Motivation Card */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl p-8 text-white text-center">
            <div className="inline-flex p-3 bg-white/20 rounded-full mb-4">
              <FaHeartbeat className="text-3xl" />
            </div>
            <h3 className="text-2xl font-bold mb-3">My Learning Philosophy</h3>
            <p className="text-teal-100 max-w-2xl mx-auto leading-relaxed">
              "Combining cybersecurity expertise with modern web development to build secure, 
              scalable, and innovative digital solutions. Every day is an opportunity to learn 
              and grow in this ever-evolving tech landscape."
            </p>
            <div className="mt-6 pt-4 border-t border-teal-400">
              <span className="text-sm font-medium">Hartron Advance Skill Centre</span>
            </div>
          </div>
        </div>

        {/* Skills Badges */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow">
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <span className="px-3 py-1 bg-teal-100 rounded-full text-teal-700 text-xs hover:bg-teal-200 transition-colors">🔒 Cybersecurity</span>
            <span className="px-3 py-1 bg-teal-100 rounded-full text-teal-700 text-xs hover:bg-teal-200 transition-colors">💻 Web Development</span>
            <span className="px-3 py-1 bg-teal-100 rounded-full text-teal-700 text-xs hover:bg-teal-200 transition-colors">🛡️ Security Testing</span>
            <span className="px-3 py-1 bg-teal-100 rounded-full text-teal-700 text-xs hover:bg-teal-200 transition-colors">🚀 MERN Stack</span>
            <span className="px-3 py-1 bg-teal-100 rounded-full text-teal-700 text-xs hover:bg-teal-200 transition-colors">🐧 Linux</span>
            <span className="px-3 py-1 bg-teal-100 rounded-full text-teal-700 text-xs hover:bg-teal-200 transition-colors">🔐 Penetration Testing</span>
            <span className="px-3 py-1 bg-teal-100 rounded-full text-teal-700 text-xs hover:bg-teal-200 transition-colors">🐍 Python</span>
            <span className="px-3 py-1 bg-teal-100 rounded-full text-teal-700 text-xs hover:bg-teal-200 transition-colors">📊 Risk Analysis</span>
          </div>
          <p className="text-gray-600 text-xs">
            Passionate about securing digital assets and building robust applications
          </p>
        </div>

      </div>
    </div>
  );
}