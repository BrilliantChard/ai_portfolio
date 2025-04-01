
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
    <div className="min-h-screen bg-slate-50">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="py-20">
          <About />
        </section>
        
        <section id="skills" className="py-20 bg-white">
          <Skills />
        </section>
        
        <section id="experience" className="py-20">
          <Experience />
        </section>
        
        <section id="education" className="py-20 bg-white">
          <Education />
        </section>
        
        <section id="projects" className="py-20">
          <Projects />
        </section>
        
        <section id="contact" className="py-20 bg-blue-50">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
