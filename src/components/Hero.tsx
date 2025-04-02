
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
              Hi, I'm <span className="text-blue-600">Chard Odhiambo</span>
            </h1>
            <div className="h-1 w-20 bg-blue-600 mx-auto md:mx-0"></div>
            <h2 className="text-2xl md:text-3xl font-medium text-slate-600">
              Software Developer & Telecom Engineer
            </h2>
            <p className="text-lg text-slate-600 max-w-xl">
              I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#contact" className="btn-primary">
                Get In Touch
              </a>
              <a href="#projects" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors duration-200">
                View Work
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="bg-white p-4 rounded-full shadow-xl">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-lg">
                <img 
                  src="/lovable-uploads/fd6b0b07-6007-4631-9096-9b5c950cf9bc.png" 
                  alt="Chard Odhiambo - Software Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -z-10 top-4 left-4 w-full h-full rounded-full bg-blue-200"></div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce" onClick={scrollToAbout}>
          <ArrowDown className="text-blue-600" size={32} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
