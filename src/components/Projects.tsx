
import { useState } from 'react';
import { ExternalLink, Github, Monitor, Code, Users, Server } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const projects = [
    {
      title: "Microstrip Patch Antenna Design and Simulation for 5G Applications",
      description: "Designed and simulated a microstrip patch antenna using HFSS for 5G applications, achieving a significant increase in efficiency.",
      image: "/IMAGES/E field.jpeg",
      category: "Telecommunications",
      technologies: ["HFSS", "MATLAB", "5G", "Antenna Design"],
      liveLink: "https://5g-antenna-design.example.com",
      features: [
        "Designed a microstrip patch antenna for 5G applications",
        "Conducted simulations using HFSS and MATLAB",
        "Achieved a 15% increase in efficiency",
        "Collaborated with senior engineers for design validation",
        "Participated in field tests for IoT applications"
      ],
      githubLink: "https://github.com/example/5g-antenna-design"
    },
    {
      title: "Smart Farming IoT System",
      description: "Developed an IoT-based smart farming system for real-time monitoring and control of agricultural parameters.",
      image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      category: "IoT",
      technologies: ["IoT", "Node-RED", "Weather APIs"],
      features: [
        "Real-time monitoring of soil moisture and temperature",
        "Automated irrigation control based on sensor data",
        "Data visualization using Node-RED dashboard",
        "Remote access and control via mobile app",
        "Integration with weather APIs for predictive analytics"
      ],
      githubLink: "https://github.com/example/smart-farming-iot"
    },
    {
      title: "Exam Management System",
      description: "A web-based application for managing student exams, including scheduling, grading, and reporting.",
      image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      technologies: ["Python", "Django", "React", "Node.js", "MongoDB"],
      category: "fullstack",
      features: [
        "User-friendly interface for students and instructors",
        "Real-time notifications and updates",
        "Secure exam scheduling and grading",
        "Comprehensive reporting and analytics",
        "Responsive design for mobile and desktop"
      ],
      githubLink: "https://github.com/example/exam-management-system"
    }
  ];
  
  const filteredProjects = filter === 'all'
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="section-title text-center">My Projects</h2>
      
      <div className="flex justify-center mt-8 mb-12">
        <div className="inline-flex p-1 bg-slate-100 rounded-lg">
          <button 
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${filter === 'all' ? 'bg-white shadow text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${filter === 'telecommunications' ? 'bg-white shadow text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            onClick={() => setFilter('telecommunications')}
          >
            <Monitor className="w-4 h-4 inline mr-1" />
            Telecommunications
          </button>
          <button 
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${filter === 'iot' ? 'bg-white shadow text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            onClick={() => setFilter('iot')}
          >
            <Server className="w-4 h-4 inline mr-1" />
            IoT
          </button>
          <button 
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${filter === 'fullstack' ? 'bg-white shadow text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            onClick={() => setFilter('fullstack')}
          >
            <Code className="w-4 h-4 inline mr-1" />
            Full Stack
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div key={index} className="card group overflow-hidden">
            <div className="aspect-video overflow-hidden rounded-lg mb-4">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <h3 className="text-xl font-semibold text-slate-800 mb-2">{project.title}</h3>
            
            <div className="flex flex-wrap gap-2 mb-3">
              {project.technologies.slice(0, 3).map((tech, techIndex) => (
                <span key={techIndex} className="skill-badge">
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="skill-badge">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
            
            <p className="text-slate-600 mb-4 line-clamp-3">{project.description}</p>
            
            <div className="mt-auto flex gap-3">
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Live Demo
              </a>
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-sm font-medium text-slate-700 hover:text-slate-900"
              >
                <Github className="w-4 h-4 mr-1" />
                View Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
