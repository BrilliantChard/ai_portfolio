
import { Code, Server, Database, Layout, Settings, Shield } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Electronics",
      icon: <Code className="h-8 w-8 text-blue-600" />,
      skills: ["Circuit Design", "Signal Processing", "RF Design", "Embedded Systems", "Microcontrollers", "FPGA", "PCB Layout"]
    },
    {
      title: "Electrical Machines",
      icon: <Code className="h-8 w-8 text-blue-600" />,
      skills: ["AC Machines", "DC Machines", "Transformers", "Power Electronics", "Control Systems", "Signal Processing"]
    },
    {
      title: "PCB Design",
      icon: <Code className="h-8 w-8 text-blue-600" />,
      skills: ["KiCAD", "Altium Designer", "Eagle", "OrCAD", "LTspice", "Multisim", "Proteus", "EasyEDA"]
    },
    {
      title: "Frontend Development",
      icon: <Layout className="h-8 w-8 text-blue-600" />,
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Backend Development",
      icon: <Server className="h-8 w-8 text-blue-600" />,
      skills: ["Node.js", "Express", "Python", "Django", "REST API"]
    },
    {
      title: "Database",
      icon: <Database className="h-8 w-8 text-blue-600" />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Oracle", "Microsoft SQL Server", "Elasticsearch"]
    },
    {
      title: "Antenna Design",
      icon: <Code className="h-8 w-8 text-blue-600" />,
      skills: ["HFSS", "CST Microwave Studio", "FEKO", "ADS", "MATLAB", "Ansys"]
    },
    {
      title: "Programming Languages",
      icon: <Code className="h-8 w-8 text-blue-600" />,
      skills: ["JavaScript", "TypeScript", "Python", "Java", "Kotlin"]
    },
    {
      title: "Security",
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      skills: ["OWASP", "Authentication", "Authorization", "Encryption", "Data Protection", "Security Testing", "Vulnerability Assessment"]
    }
  ];

  const proficiencyLevels = [
    { title: "Beginner", percentage: 25 },
    { title: "Intermediate", percentage: 50 },
    { title: "Advanced", percentage: 75 },
    { title: "Expert", percentage: 95 }
  ];

  const keySkills = [
    { name: "Antenna Design", level: "Expert" },
    { name: "Electronics", level: "Expert" },
    { name: "PCB Design", level: "Advanced" },
    { name: "Networking", level: "Advanced" },
    { name: "JavaScript", level: "Expert" },
    { name: "React", level: "Intermediate" },
    { name: "Node.js", level: "Advanced" },
    { name: "TypeScript", level: "Advanced" },
    { name: "PostgreSQL", level: "Advanced" },
    { name: "MATLAB", level: "Expert" },
    { name: "Python", level: "Expert" },
    { name: "Django", level: "Intermediate" },
    { name: "KiCAD", level: "Advanced" },
    { name: "Signal Processing", level: "Expert" }
  ];

  return (
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="section-title text-center">My Skills</h2>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold text-slate-800 mb-6">Key Proficiency</h3>
          
          <div className="space-y-6">
            {keySkills.map((skill, index) => {
              const levelObj = proficiencyLevels.find(level => level.title === skill.level);
              const percentage = levelObj ? levelObj.percentage : 50;
              
              return (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-slate-700">{skill.name}</span>
                    <span className="text-sm text-slate-600">{skill.level}</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-in-out" 
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">Proficiency Levels</h3>
            <div className="flex flex-wrap gap-3 mt-4">
              {proficiencyLevels.map((level, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-600" style={{ opacity: 0.4 + (index * 0.2) }}></div>
                  <span className="text-sm text-slate-700">{level.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold text-slate-800 mb-6">Technical Skills</h3>
          
          <div className="space-y-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="card">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h4 className="ml-3 text-lg font-semibold text-slate-800">{category.title}</h4>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
