import React from 'react';
import { 
  FaCode, 
  FaServer, 
  FaShieldAlt, 
  FaTools,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaAws,
  FaGithub,
  FaDocker,
  FaLinux,
  FaGlobe,
  FaBug,
  FaLock,
  FaDatabase,
  FaCloudUploadAlt,
  FaCodeBranch,
  FaTerminal
} from 'react-icons/fa';
import { MdSecurity, MdEmail, MdCloudUpload, MdDeveloperMode } from 'react-icons/md';

export default function Skill() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaCode className="text-teal-500" />,
      color: "from-teal-400 to-cyan-400",
      bgColor: "bg-teal-50",
      skills: [
        { name: "HTML5", icon: <FaHtml5 />, level: "90%" },
        { name: "CSS3", icon: <FaCss3Alt />, level: "85%" },
        { name: "Tailwind CSS", icon: <FaCodeBranch />, level: "88%" },
        { name: "React.js", icon: <FaReact />, level: "85%" }
      ]
    },
    {
      title: "Backend Development",
      icon: <FaServer className="text-teal-500" />,
      color: "from-cyan-400 to-teal-400",
      bgColor: "bg-cyan-50",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, level: "85%" },
        { name: "Express.js", icon: <FaServer />, level: "87%" },
        { name: "Mongoose", icon: <FaDatabase />, level: "82%" },
        { name: "MySQL", icon: <FaDatabase />, level: "80%" },
        { name: "Cloudinary", icon: <MdCloudUpload />, level: "85%" },
        { name: "Nodemailer", icon: <MdEmail />, level: "83%" },
        { name: "AWS S3", icon: <FaCloudUploadAlt />, level: "78%" }
      ]
    },
    {
      title: "Ethical Hacking",
      icon: <FaShieldAlt className="text-teal-500" />,
      color: "from-teal-400 to-emerald-400",
      bgColor: "bg-teal-50",
      skills: [
        { name: "Linux", icon: <FaLinux />, level: "85%" },
        { name: "Web Hacking", icon: <FaGlobe />, level: "80%" },
        { name: "App Hacking", icon: <FaBug />, level: "75%" },
        { name: "Security Testing", icon: <FaLock />, level: "82%" }
      ]
    },
    {
      title: "Development Tools",
      icon: <FaTools className="text-teal-500" />,
      color: "from-emerald-400 to-teal-400",
      bgColor: "bg-emerald-50",
      skills: [
        { name: "VS Code", icon: <FaTerminal />, level: "95%" },
        { name: "GitHub", icon: <FaGithub />, level: "88%" },
        { name: "Postman", icon: <FaCode />, level: "85%" },
        { name: "Docker", icon: <FaDocker />, level: "75%" }
      ]
    }
  ];

  return (
    <div id="skills" className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-100 px-4 py-2 rounded-full mb-4">
            <FaCode className="text-teal-600" />
            <span className="text-teal-700 text-sm font-medium">Technical Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              My Skills & Technologies
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills across web development, 
            cybersecurity, and development tools
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl border border-gray-200 hover:border-teal-300 transition-all duration-300 hover:shadow-xl hover:shadow-teal-100 overflow-hidden"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Header */}
              <div className={`p-6 border-b border-gray-100 ${category.bgColor}`}>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <div className="text-2xl">{category.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                    <p className="text-gray-500 text-sm mt-1">
                      {category.skills.length} Technologies
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills List */}
              <div className="p-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group/skill relative bg-gray-50 rounded-lg p-3 border border-gray-200 hover:border-teal-300 transition-all duration-300 hover:shadow-md"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-teal-500 text-lg group-hover/skill:scale-110 transition-transform">
                          {skill.icon}
                        </div>
                        <span className="text-gray-700 font-medium text-sm">
                          {skill.name}
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="relative">
                        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: skill.level }}
                          ></div>
                        </div>
                        <span className="absolute right-0 top-2 text-xs text-gray-500">
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-teal-50 to-transparent rounded-tl-full pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Additional Skills Badge Section */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center shadow-sm">
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <span className="px-4 py-2 bg-teal-100 rounded-full text-teal-700 text-sm font-medium">
                🔒 Security First Approach
              </span>
              <span className="px-4 py-2 bg-teal-100 rounded-full text-teal-700 text-sm font-medium">
                🚀 Modern Web Technologies
              </span>
              <span className="px-4 py-2 bg-teal-100 rounded-full text-teal-700 text-sm font-medium">
                🛠️ Industry Standard Tools
              </span>
              <span className="px-4 py-2 bg-teal-100 rounded-full text-teal-700 text-sm font-medium">
                📱 Responsive Design
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              Continuously learning and staying updated with the latest technologies and security practices
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}