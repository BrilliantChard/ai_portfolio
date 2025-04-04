
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <section 
          id="home"
          className="bg-gradient-to-b from-indigo-900 via-indigo-800 to-indigo-700 dark:from-slate-900 dark:via-indigo-950 dark:to-indigo-900"
        >
          <Hero />
        </section>
        
        <section 
          id="about" 
          className="py-20 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'linear-gradient(rgba(79, 70, 229, 0.8), rgba(79, 70, 229, 0.7)), url("https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80")' }}
        >
          <div className="container mx-auto px-4 bg-gradient-to-br from-blue-50/90 to-indigo-100/90 dark:bg-slate-800/80 backdrop-blur-sm py-10 rounded-lg shadow-lg animate-fade-in">
            <About />
          </div>
        </section>
        
        <section 
          id="skills" 
          className="py-20 bg-cover bg-center"
          style={{ backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.9), rgba(6, 182, 212, 0.8))' }}
        >
          <div className="container mx-auto px-4 animate-slide-in">
            <Skills />
          </div>
        </section>
        
        <section 
          id="experience" 
          className="py-20 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'linear-gradient(rgba(5, 150, 105, 0.85), rgba(5, 150, 105, 0.75)), url("https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1920&q=80")' }}
        >
          <div className="container mx-auto px-4 bg-gradient-to-br from-emerald-50/90 to-green-100/90 dark:bg-slate-800/80 backdrop-blur-sm py-10 rounded-lg shadow-lg animate-fade-in">
            <Experience />
          </div>
        </section>
        
        <section 
          id="education" 
          className="py-20 bg-cover bg-center"
          style={{ backgroundImage: 'linear-gradient(rgba(124, 58, 237, 0.85), rgba(124, 58, 237, 0.75)), url("https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1920&q=80")' }}
        >
          <div className="container mx-auto px-4 bg-gradient-to-br from-purple-50/90 to-violet-100/90 dark:bg-slate-800/80 backdrop-blur-sm py-10 rounded-lg shadow-lg animate-scale-in">
            <Education />
          </div>
        </section>
        
        <section 
          id="projects" 
          className="py-20 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'linear-gradient(rgba(217, 70, 239, 0.85), rgba(217, 70, 239, 0.75)), url("https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1920&q=80")' }}
        >
          <div className="container mx-auto px-4 bg-gradient-to-br from-fuchsia-50/90 to-pink-100/90 dark:bg-slate-800/80 backdrop-blur-sm py-10 rounded-lg shadow-lg animate-fade-in">
            <Projects />
          </div>
        </section>
        
        <section 
          id="contact" 
          className="py-20 bg-gradient-to-r from-amber-500 to-orange-500 dark:from-amber-800 dark:to-orange-700"
        >
          <div className="container mx-auto px-4 bg-gradient-to-br from-amber-50/90 to-orange-100/90 dark:bg-slate-800/80 backdrop-blur-sm py-10 rounded-lg shadow-lg animate-bounce-in">
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
