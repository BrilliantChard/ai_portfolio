

import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Barchelors Science in Telecommunication and Information Engineering",
      institution: "Dedan Kimathi University of Technology",
      location: "Nyeri, Kenya",
      duration: "2020 - 2024",
      description: "Focused on the principles of telecommunications, networking, and information systems. Developed a strong foundation in programming and software development.",
      achievements: [
        "Graduated with honors (GPA: 3.7/4.0)",
        "President of the Engineering Science Club",
        "Completed a thesis on '5G Network Optimization Techniques'",
        "Internship at Safaricom Kenya in Network Engineering Department",
      ]
    },
    {
      degree: "Bachelor of Engineering in Software Engineering",
      institution: "University of Washington",
      location: "Seattle, WA",
      duration: "2010 - 2014",
      description: "Comprehensive program covering software development methodologies, data structures, algorithms, and system design principles.",
      achievements: [
        "Graduated summa cum laude (GPA: 3.8/4.0)",
        "President of the University Coding Club",
        "Completed capstone project 'Smart Campus Navigation System'",
        "Dean's List for all semesters"
      ]
    }
  ];
  
  const certifications = [
    {
      title: "PCB Design Using KiCAD - Professional",
      issuer: "Udemy Acadmey",
      date: "2024"
    },
    {
      title: "Network Security and Database Management",
      issuer: "Cisco Networking Academy",
      date: "2023"
    },
    {
      title: "Digital Electronics Fundamentals",
      issuer: "Mind Luster",
      date: "2025"
    },
    {
      title: "Cisco Certified Network Associate (CCNA)",
      issuer: "Mind Luster",
      date: "2025"
    }
  ];
  
  return (
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="section-title text-center">Education & Certifications</h2>
      
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
            <GraduationCap className="w-6 h-6 mr-2 text-blue-600" />
            Academic Education
          </h3>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="card relative">
                {index < education.length - 1 && (
                  <div className="absolute top-full left-8 w-0.5 h-8 bg-blue-200 z-0"></div>
                )}
                
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-1">{edu.degree}</h4>
                  <h5 className="text-lg font-medium text-blue-600 mb-1">{edu.institution}</h5>
                  <p className="text-slate-600 mb-2">{edu.location}</p>
                  
                  <div className="flex items-center text-slate-600 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{edu.duration}</span>
                  </div>
                  
                  <p className="text-slate-600 mb-4">{edu.description}</p>
                  
                  <h6 className="font-semibold text-slate-800 mb-2">Highlights:</h6>
                  <ul className="list-disc pl-5 space-y-1 text-slate-600">
                    {edu.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="lg:pl-8">
          <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
            <Award className="w-6 h-6 mr-2 text-blue-600" />
            Professional Certifications
          </h3>
          
          <div className="card">
            <div className="grid grid-cols-1 divide-y">
              {certifications.map((cert, index) => (
                <div key={index} className="py-4 first:pt-0 last:pb-0">
                  <div className="flex items-start">
                    <BookOpen className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-800">{cert.title}</h4>
                      <p className="text-blue-600">{cert.issuer}</p>
                      <div className="flex mt-1 text-sm text-slate-600">
                        <span className="mr-3">Issued: {cert.date}</span>
                        {/* Removed ID as it does not exist */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
              <BookOpen className="w-6 h-6 mr-2 text-blue-600" />
              Continuing Education
            </h3>
            
            <div className="card">
              <h4 className="font-semibold text-slate-800 mb-4">Ongoing Learning & Development</h4>
              
              <p className="text-slate-600 mb-4">
                I am committed to continuous professional development through online courses, workshops, and self-directed learning. Some recent areas of focus include:
              </p>
              
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>Software Engineering</li>
                <li>Serverless Computing and FaaS (Function as a Service)</li>
                <li>Progressive Web Applications (PWAs)</li>
                <li>Machine Learning for Developers</li>
                <li>Web Accessibility and Inclusive Design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
