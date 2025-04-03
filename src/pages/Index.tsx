
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
    <div className="min-h-screen bg-slate-100">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section 
          id="about" 
          className="py-20 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 50, 0.7), rgba(0, 0, 50, 0.7)), url("https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80")' }}
        >
          <div className="container mx-auto px-4 bg-white/80 backdrop-blur-sm py-10 rounded-lg shadow-lg">
            <About />
          </div>
        </section>
        
        <section 
          id="skills" 
          className="py-20 bg-cover bg-center"
          style={{ backgroundImage: 'linear-gradient(rgba(245, 245, 255, 0.9), rgba(245, 245, 255, 0.9))' }}
        >
          <div className="container mx-auto px-4">
            <Skills />
          </div>
        </section>
        
        <section 
          id="experience" 
          className="py-20 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'linear-gradient(rgba(4, 9, 30, 0.8), rgba(4, 9, 30, 0.8)), url("https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1920&q=80")' }}
        >
          <div className="container mx-auto px-4 bg-white/80 backdrop-blur-sm py-10 rounded-lg shadow-lg">
            <Experience />
          </div>
        </section>
        
        <section 
          id="education" 
          className="py-20 bg-cover bg-center"
          style={{ backgroundImage: 'linear-gradient(rgba(245, 245, 255, 0.92), rgba(245, 245, 255, 0.92)), url("https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1920&q=80")' }}
        >
          <div className="container mx-auto px-4">
            <Education />
          </div>
        </section>
        
        <section 
          id="projects" 
          className="py-20 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'linear-gradient(rgba(5, 10, 30, 0.85), rgba(5, 10, 30, 0.85)), url("https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1920&q=80")' }}
        >
          <div className="container mx-auto px-4 bg-white/80 backdrop-blur-sm py-10 rounded-lg shadow-lg">
            <Projects />
          </div>
        </section>
        
        <section 
          id="contact" 
          className="py-20 bg-gradient-to-r from-blue-100 to-indigo-100"
        >
          <div className="container mx-auto px-4">
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
