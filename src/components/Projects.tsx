
import { useState } from 'react';
import { Monitor, Code, Server, TrafficCone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useIsMobile } from '@/hooks/use-mobile';

const Projects = () => {
  const [filter, setFilter] = useState<string>('all');
  const isMobile = useIsMobile();
  
  const projects = [
    {
      title: "Microstrip Patch Antenna Design and Simulation for 5G Applications",
      description: "Designed and simulated a microstrip patch antenna using HFSS for 5G applications, achieving a significant increase in efficiency.",
      image: "/lovable-uploads/85ae7207-6631-4e5f-9c08-735e46205050.png",
      category: "telecommunications",
      technologies: ["HFSS", "MATLAB", "5G", "Antenna Design"],
      features: [
        "Designed a microstrip patch antenna for 5G applications",
        "Conducted simulations using HFSS and MATLAB",
        "Achieved a 15% increase in efficiency",
        "Collaborated with senior engineers for design validation",
        "Participated in field tests for IoT applications"
      ]
    },
    {
      title: "Smart Farming IoT System",
      description: "Developed an IoT-based smart farming system for real-time monitoring and control of agricultural parameters.",
      image: "/lovable-uploads/68c24496-6f70-4650-af4a-bdc75fc9ce01.png",
      category: "IoT",
      technologies: ["IoT", "Node-RED", "Weather APIs"],
      features: [
        "Real-time monitoring of soil moisture and temperature",
        "Automated irrigation control based on sensor data",
        "Data visualization using Node-RED dashboard",
        "Remote access and control via mobile app",
        "Integration with weather APIs for predictive analytics"
      ]
    },
    {
      title: "Exam Management System",
      description: "A web-based application for managing student exams, including scheduling, grading, and reporting.",
      image: "/lovable-uploads/349a3afc-e5d1-4910-893a-ea68aa34cb74.png",
      technologies: ["Python", "Django", "React", "Node.js", "MongoDB"],
      category: "fullstack",
      features: [
        "User-friendly interface for students and instructors",
        "Real-time notifications and updates",
        "Secure exam scheduling and grading",
        "Comprehensive reporting and analytics",
        "Responsive design for mobile and desktop"
      ]
    },
    {
      title: "Design of Traffic Lighting System using KICAD",
      description: "Designed a traffic lighting system using KICAD, focusing on efficient and reliable control of traffic flow.",
      image: "/lovable-uploads/e623b62e-ec71-48fb-8941-e6d698d7b117.png",
      category: "electronics",
      technologies: ["KICAD", "PCB Design", "Embedded Systems"],
      features: [
        "Designed a PCB for a traffic light controller",
        "Used KICAD for schematic capture and PCB layout",
        "Implemented a microcontroller-based control system",
        "Optimized power consumption for extended battery life",
        "Incorporated fail-safe mechanisms for critical traffic scenarios"
      ]
    }
  ];
  
  const filteredProjects = filter === 'all'
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="section-title text-center mb-8 text-2xl md:text-3xl font-bold">My Projects</h2>
      
      <div className="flex justify-center mt-8 mb-12 overflow-x-auto">
        <div className={`inline-flex p-1 bg-slate-100 rounded-lg ${isMobile ? 'w-full' : ''}`}>
          <button 
            className={`px-3 md:px-4 py-2 rounded-md text-xs md:text-sm font-medium transition-colors whitespace-nowrap ${filter === 'all' ? 'bg-white shadow text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`px-3 md:px-4 py-2 rounded-md text-xs md:text-sm font-medium transition-colors whitespace-nowrap ${filter === 'telecommunications' ? 'bg-white shadow text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            onClick={() => setFilter('telecommunications')}
          >
            <Monitor className="w-3 h-3 md:w-4 md:h-4 inline mr-1" />
            Telecommunications
          </button>
          <button 
            className={`px-3 md:px-4 py-2 rounded-md text-xs md:text-sm font-medium transition-colors whitespace-nowrap ${filter === 'iot' ? 'bg-white shadow text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            onClick={() => setFilter('iot')}
          >
            <Server className="w-3 h-3 md:w-4 md:h-4 inline mr-1" />
            IoT
          </button>
          <button 
            className={`px-3 md:px-4 py-2 rounded-md text-xs md:text-sm font-medium transition-colors whitespace-nowrap ${filter === 'fullstack' ? 'bg-white shadow text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            onClick={() => setFilter('fullstack')}
          >
            <Code className="w-3 h-3 md:w-4 md:h-4 inline mr-1" />
            Full Stack
          </button>
          <button 
            className={`px-3 md:px-4 py-2 rounded-md text-xs md:text-sm font-medium transition-colors whitespace-nowrap ${filter === 'electronics' ? 'bg-white shadow text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            onClick={() => setFilter('electronics')}
          >
            <TrafficCone className="w-3 h-3 md:w-4 md:h-4 inline mr-1" />
            Electronics
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredProjects.map((project, index) => (
          <div key={index} className="card group overflow-hidden border border-slate-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-all">
            <div className="aspect-video overflow-hidden rounded-t-lg">
              <AspectRatio ratio={16/9}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </AspectRatio>
            </div>
            
            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2 line-clamp-2">{project.title}</h3>
              
              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{project.technologies.length - 3}
                  </Badge>
                )}
              </div>
              
              <p className="text-sm text-slate-600 mb-4 line-clamp-3">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
