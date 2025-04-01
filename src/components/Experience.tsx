
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      duration: "January 2021 - Present",
      description: "Leading the development of a microservices-based e-commerce platform, managing a team of 5 developers, and implementing CI/CD pipelines to streamline the deployment process.",
      achievements: [
        "Reduced API response time by 40% through the optimization of database queries and implementation of caching strategies",
        "Led the migration from a monolithic architecture to microservices, resulting in a 30% improvement in system scalability",
        "Implemented comprehensive test automation that increased code coverage from 65% to 92%",
        "Mentored junior developers through code reviews, pair programming, and technical workshops"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS", "GraphQL"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      location: "Seattle, WA",
      duration: "March 2018 - December 2020",
      description: "Developed and maintained web applications for clients in healthcare, finance, and retail sectors, collaborating closely with product managers and designers to ensure optimal user experiences.",
      achievements: [
        "Designed and implemented a real-time dashboard for healthcare providers, reducing patient wait times by 25%",
        "Built a responsive web application that increased client's mobile conversion rate by 35%",
        "Optimized database performance, reducing query times by 60% for high-traffic applications",
        "Created reusable component libraries that accelerated development time for future projects by 40%"
      ],
      technologies: ["Vue.js", "Express", "MongoDB", "Redis", "Azure", "REST API"]
    },
    {
      title: "Junior Web Developer",
      company: "StartUp Ventures",
      location: "Austin, TX",
      duration: "June 2016 - February 2018",
      description: "Contributed to the development of the company's flagship product, a SaaS platform for project management, while collaborating with senior developers to learn best practices.",
      achievements: [
        "Implemented front-end features that enhanced user engagement by 28%",
        "Participated in the redesign of the user interface, improving usability scores by 42%",
        "Developed automated testing scripts that reduced QA time by 15%",
        "Contributed to open-source projects, showcasing company expertise and improving community relations"
      ],
      technologies: ["HTML/CSS", "JavaScript", "Angular", "PHP", "MySQL", "Git"]
    }
  ];
  
  return (
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="section-title text-center">Work Experience</h2>
      
      <div className="mt-12 space-y-12">
        {experiences.map((experience, index) => (
          <div key={index} className="card relative">
            {/* Timeline dot */}
            {index < experiences.length - 1 && (
              <div className="absolute top-full left-8 w-0.5 h-12 bg-blue-200 z-0"></div>
            )}
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="flex items-center mb-2">
                  <Briefcase className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold text-slate-800">{experience.title}</h3>
                </div>
                
                <h4 className="text-lg font-medium text-blue-600 mb-1">{experience.company}</h4>
                <p className="text-slate-600 mb-2">{experience.location}</p>
                
                <div className="flex items-center text-slate-600 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{experience.duration}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
                  {experience.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="skill-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="md:w-2/3">
                <p className="text-slate-600 mb-4">{experience.description}</p>
                
                <h5 className="font-semibold text-slate-800 mb-2">Key Achievements:</h5>
                <ul className="list-disc pl-5 space-y-2 text-slate-600">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
