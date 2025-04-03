
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Telecommunication Engineer",
      company: "Kenya Broadcasting Corporation, KBC",
      location: "Nairobi, Kenya",
      duration: "January 2025 - Present",
      description: "Responsible for the design, implementation, and maintenance of telecommunication systems, ensuring optimal performance and reliability.",
      achievements: [
        "1️⃣ Broadcast Transmission Experience – Hands-on skills in DTT (DVB-T2), signal encoding, multiplexing, and troubleshooting.",
        "2️⃣ Fiber Optic & IP Transmission – Knowledge of fiber optic signal distribution, IP-based broadcasting, and DVB over IP.",
        "3️⃣ Networking & Cybersecurity – Exposure to networked broadcast systems, remote monitoring, and cybersecurity best practices.",
        "4️⃣ Technical Documentation – Improved skills in writing reports, maintenance logs, and troubleshooting documentation."
      ],
      technologies: ["RF Design", "Signal Processing", "Network Security", "Telecom Protocols", "Project Management"]
    },
    {
      title: "Electrical Engineer",
      company: "KenGEN, Kenya",
      location: "Naivasha, Kenya",
      duration: "May 2023 - August 2023",
      description: "Worked on the design and implementation of electrical systems for telecommunications infrastructure, focusing on energy efficiency and sustainability.",
      achievements: [
        "1️⃣ Power Generation & Electrical Systems – Hands-on experience with motors, generators, transformers, and power distribution.",
        "2️⃣ Instrumentation & Control – Working with sensors, PLCs, SCADA systems, and industrial automation.",
        "3️⃣ Maintenance & Troubleshooting – Skills in diagnosing faults, repairing electrical equipment, and preventive maintenance.",
        "4️⃣ Technical Documentation – Improved ability to document procedures, maintenance logs, and system reports."
      ],
      technologies: ["AutoCAD", "MATLAB", "Energy Management Systems", "Telecom Infrastructure", "Project Management"]
    },
    {
      title: "Telecom Engineer Intern",
      company: "DeKUT, Kenya",
      location: "Nyeri, Kenya",
      duration: "June 2022 - August 2022",
      description: "Assisted in the design and testing of telecommunication systems, gaining hands-on experience in RF design and signal processing.",
      achievements: [
        "Contributed to the design of a microstrip patch antenna for 5G applications, achieving a 15% increase in efficiency",
        "Conducted simulations using HFSS and MATLAB, providing valuable insights for the R&D team",
        "Participated in field tests for IoT applications in smart farming, improving data transmission rates by 20%",
        "Collaborated with senior engineers to troubleshoot and resolve technical issues in existing systems"
      ],
      technologies: ["HFSS", "MATLAB", "IoT", "Signal Processing", "RF Design"]
    },
    
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
