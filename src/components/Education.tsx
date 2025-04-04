
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelors of Science in Telecommunication and Information Engineering",
      institution: "Dedan Kimathi University of Technology",
      location: "Nyeri, Kenya",
      duration: "2020 - 2024",
      description: "Focused on the principles of telecommunications, networking, and information systems. Developed a strong foundation in programming and software development.",
      achievements: [
        "Completed final-year coursework with a focus on 5G networks, microwave communications, and embedded systems.",
        "Actively working on projects involving backend development with Python (Django) and IoT applications.",
        "Completed a thesis on \"5G Network Optimization Techniques and Antenna Design for mmWave Applications.\"",
        "Internship at KBC, Kenya in the Telecom & Network Engineering Department, gaining experience in digital TV transmission, fiber optics, and cybersecurity.",
        "Previous attachment at KENGEN in Power Systems & Instrumentation, focusing on electrical maintenance, PLCs, and SCADA systems."
      ]
    },
  ];
  
  const certifications = [
    {
      title: "PCB Design Using KiCAD - Professional",
      issuer: "Udemy Acadmey",
      date: "2024",
      pdf: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-e17e5995-4b0a-4c88-9930-92547b5b65f1.pdf"
    },
    {
      title: "Network Security and Database Management",
      issuer: "Cisco Networking Academy",
      date: "2023",
    },
    {
      title: "Arduino for Robotics",
      issuer: "MindLuster Academy",
      date: "2023",
      pdf: "https://www.mindluster.com/student/certificate/0706a395"
    },
    {
      title: "Python for Everybody Specialization",
      issuer: "Coursera",
      date: "2023",
      pdf: "https://www.coursera.org/account/accomplishments/specialization/certificate/9E7JYQZB3F7R"
    },
    {
      title: "Digital Electronics Fundamentals",
      issuer: "Mind Luster",
      date: "2025",
      pdf: "https://www.mindluster.com/student/certificate/84c509be"
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
                <li>Cisco Certified Network Associate (CCNA)</li>
                <li>Advanced Python Programming</li>
                <li>Electrical Machines and Design Principles</li>
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
