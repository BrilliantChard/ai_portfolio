
import { useState } from 'react';
import { ExternalLink, Github, Monitor, Code, Users, Server } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A complete e-commerce solution with product management, shopping cart, payment processing, and order tracking functionalities.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
      category: "fullstack",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API", "AWS S3"],
      liveLink: "https://ecommerce-project.example.com",
      githubLink: "https://github.com/johndoe/ecommerce-project",
      features: [
        "Responsive product catalog with advanced filtering",
        "User authentication and profile management",
        "Secure payment processing with Stripe",
        "Order history and tracking",
        "Admin dashboard for inventory management"
      ]
    },
    {
      title: "Task Management App",
      description: "A productivity application for managing tasks, projects, and deadlines with team collaboration features.",
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      category: "frontend",
      technologies: ["Vue.js", "Vuex", "Firebase", "Tailwind CSS"],
      liveLink: "https://task-app.example.com",
      githubLink: "https://github.com/johndoe/task-management-app",
      features: [
        "Drag-and-drop task organization",
        "Real-time updates with Firebase",
        "Task categorization and priority settings",
        "Deadline notifications and reminders",
        "Team collaboration and task assignment"
      ]
    },
    {
      title: "Healthcare API",
      description: "A secure API for healthcare providers to manage patient records, appointments, and medical histories.",
      image: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      category: "backend",
      technologies: ["Express", "PostgreSQL", "JWT", "Jest", "Docker"],
      liveLink: "https://healthcare-api-docs.example.com",
      githubLink: "https://github.com/johndoe/healthcare-api",
      features: [
        "HIPAA-compliant data storage and transmission",
        "Role-based access control",
        "Comprehensive API documentation",
        "Automated testing with 95% coverage",
        "Containerized deployment for scalability"
      ]
    },
    {
      title: "Real Estate Marketplace",
      description: "A platform connecting property buyers, sellers, and agents with property listings, search functionality, and messaging.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
      category: "fullstack",
      technologies: ["React", "Django", "PostgreSQL", "Redis", "Google Maps API"],
      liveLink: "https://realestate-marketplace.example.com",
      githubLink: "https://github.com/johndoe/realestate-marketplace",
      features: [
        "Advanced property search with multiple filters",
        "Interactive maps for property locations",
        "Virtual tours and property galleries",
        "Agent-client messaging system",
        "Appointment scheduling for viewings"
      ]
    },
    {
      title: "Budget Tracker Dashboard",
      description: "A financial management application to track expenses, income, and budget goals with data visualization.",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      category: "frontend",
      technologies: ["Angular", "Chart.js", "TypeScript", "SASS", "PWA"],
      liveLink: "https://budget-tracker.example.com",
      githubLink: "https://github.com/johndoe/budget-tracker",
      features: [
        "Interactive charts and spending analytics",
        "Budget goal setting and tracking",
        "Expense categorization and tagging",
        "Recurring transaction management",
        "Offline functionality with PWA"
      ]
    },
    {
      title: "Content Management System",
      description: "A customizable CMS for websites, blogs, and digital content with user management and analytics.",
      image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      category: "backend",
      technologies: ["Node.js", "MongoDB", "GraphQL", "AWS Lambda", "Redis"],
      liveLink: "https://headless-cms.example.com",
      githubLink: "https://github.com/johndoe/content-management-system",
      features: [
        "Headless architecture with API-first approach",
        "Rich text editor with media management",
        "Content versioning and scheduling",
        "User roles and permissions",
        "Content analytics and insights"
      ]
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
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${filter === 'frontend' ? 'bg-white shadow text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            onClick={() => setFilter('frontend')}
          >
            <Monitor className="w-4 h-4 inline mr-1" />
            Frontend
          </button>
          <button 
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${filter === 'backend' ? 'bg-white shadow text-blue-600' : 'text-slate-600 hover:text-blue-600'}`}
            onClick={() => setFilter('backend')}
          >
            <Server className="w-4 h-4 inline mr-1" />
            Backend
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
