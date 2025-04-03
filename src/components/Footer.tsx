
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
              Chard<span className="text-blue-400">Omollo</span>
            </h2>
            <p className="text-sm md:text-base text-slate-300 max-w-md">
              Telecom Engineer & Software Developer specializing in creating exceptional digital experiences.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/chardomollo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/ChardOdhiambo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a 
              href="https://twitter.com/ChardOdhiambo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-6 md:mt-8 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs md:text-sm text-slate-400 mb-4 md:mb-0 text-center md:text-left">
            &copy; {currentYear} Chard Omollo. All rights reserved.
          </p>
          
          <nav>
            <ul className="flex flex-wrap gap-4 md:gap-6 justify-center text-xs md:text-sm">
              <li>
                <a href="#home" className="text-slate-300 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="text-slate-300 hover:text-white transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-slate-300 hover:text-white transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        
        <div className="text-center mt-6 md:mt-8 text-xs md:text-sm text-slate-400 flex items-center justify-center">
          <span>Made with</span>
          <Heart className="w-3 h-3 md:w-4 md:h-4 mx-1 text-red-500 fill-red-500" />
          <span>in 2025</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
