
import { User, MapPin, Mail, Phone, Calendar, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <h2 className="section-title text-center">About Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="md:col-span-1">
          <div className="card h-full">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-100 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="John Doe" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Chard Odhiambo</h3>
              <p className="text-blue-600 font-medium">Telecom Engineer & Software Developer</p>
              
              <div className="w-full mt-6 space-y-3">
                <div className="flex items-center text-slate-600">
                  <User className="w-5 h-5 mr-3 text-blue-600" />
                  <span>Male, 23 years</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <MapPin className="w-5 h-5 mr-3 text-blue-600" />
                  <span>Nairobi, Kenya</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <Mail className="w-5 h-5 mr-3 text-blue-600" />
                  <a href="mailto:john.doe@example.com" className="hover:text-blue-600">chard.omollo25@gmail.com</a>
                </div>
                <div className="flex items-center text-slate-600">
                  <Phone className="w-5 h-5 mr-3 text-blue-600" />
                  <a href="tel:+1234567890" className="hover:text-blue-600">+2547 38979467</a>
                </div>
                <div className="flex items-center text-slate-600">
                  <Calendar className="w-5 h-5 mr-3 text-blue-600" />
                  <span>Available from January 2025</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <Globe className="w-5 h-5 mr-3 text-blue-600" />
                  <a href="https://www.johndoe.dev" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">www.chardotiato.dev</a>
                </div>
              </div>
              
              <div className="mt-6 w-full">
                <a 
                  href="#contact" 
                  className="block w-full text-center py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <div className="card h-full">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">Professional Summary</h3>
            <p className="text-slate-600 mb-4">
            I am a Telecommunications Engineer with expertise in antenna design, signal processing, and wireless communication systems. 
            My experience spans HFSS, Simulink, and PCB design (KiCad), with hands-on projects in 5G microstrip patch antennas, IoT smart farming, and power supply circuit design for vehicles. 
            </p>
            <p className="text-slate-600 mb-4">
            I also specialize in backend development with Python (Django), frontend with React, and networking security (Cisco Certified). 
            Whether it's IoT automation, PCB layouts, or fiber optic communications, I bring precision and innovation to every project. 
            </p>
            <p className="text-slate-600 mb-4">
              When I'm not coding or designing, I enjoy contributing to open-source projects, writing technical articles, and mentoring aspiring developers. 
              I am driven by challenges and the opportunity to make a positive impact through technology.
            </p>
            
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-slate-800 mb-3">Why Work With Me?</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-slate-800">Problem Solver</h5>
                    <p className="text-sm text-slate-600">I tackle complex challenges with creative solutions.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-slate-800">Continuous Learner</h5>
                    <p className="text-sm text-slate-600">I stay updated with the latest technologies and trends.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-slate-800">Team Player</h5>
                    <p className="text-sm text-slate-600">I collaborate effectively to achieve common goals.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-slate-800">Detail-Oriented</h5>
                    <p className="text-sm text-slate-600">I pay close attention to quality and precision.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
