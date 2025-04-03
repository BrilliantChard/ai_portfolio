
import { useState, useEffect } from 'react';
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

  // Add scroll snap behavior with CSS
  return (
    <div className="relative">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <section id="home" className="h-screen w-full snap-start bg-gradient-to-r from-blue-50 to-indigo-50 relative">
          <Hero />
        </section>
        
        <section id="about" className="h-screen w-full snap-start flex items-center relative bg-cover bg-center" style={{ backgroundImage: 'url("/lovable-uploads/349a3afc-e5d1-4910-893a-ea68aa34cb74.png")' }}>
          <div className="absolute inset-0 bg-slate-900/70"></div>
          <div className="relative z-10 w-full py-20">
            <About />
          </div>
        </section>
        
        <section id="skills" className="h-screen w-full snap-start flex items-center relative bg-cover bg-center" style={{ backgroundImage: 'url("/lovable-uploads/68c24496-6f70-4650-af4a-bdc75fc9ce01.png")' }}>
          <div className="absolute inset-0 bg-slate-900/70"></div>
          <div className="relative z-10 w-full py-20">
            <Skills />
          </div>
        </section>
        
        <section id="experience" className="h-screen w-full snap-start flex items-center relative bg-cover bg-center" style={{ backgroundImage: 'url("/lovable-uploads/85ae7207-6631-4e5f-9c08-735e46205050.png")' }}>
          <div className="absolute inset-0 bg-slate-900/70"></div>
          <div className="relative z-10 w-full py-20">
            <Experience />
          </div>
        </section>
        
        <section id="education" className="h-screen w-full snap-start flex items-center relative bg-cover bg-center" style={{ backgroundImage: 'url("/lovable-uploads/e623b62e-ec71-48fb-8941-e6d698d7b117.png")' }}>
          <div className="absolute inset-0 bg-slate-900/70"></div>
          <div className="relative z-10 w-full py-20">
            <Education />
          </div>
        </section>
        
        <section id="projects" className="min-h-screen w-full snap-start flex items-center relative bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(109.6deg, rgba(223,234,247,1) 11.2%, rgba(244,248,252,1) 91.1%)' }}>
          <div className="absolute inset-0 bg-slate-900/50"></div>
          <div className="relative z-10 w-full py-20">
            <Projects />
          </div>
        </section>
        
        <section id="contact" className="h-screen w-full snap-start flex items-center relative bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(to right, #243949 0%, #517fa4 100%)' }}>
          <div className="absolute inset-0 bg-slate-900/50"></div>
          <div className="relative z-10 w-full py-20">
            <Contact />
          </div>
        </section>
        
        <div className="snap-start">
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Index;
