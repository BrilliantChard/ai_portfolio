
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

type NavbarProps = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};

const Navbar = ({ activeSection, setActiveSection }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-blue-600" onClick={() => handleNavClick('home')}>
            Dev<span className="text-slate-800">Portfolio</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className={`nav-link ${activeSection === link.id ? 'text-blue-600 font-semibold' : 'text-slate-700'}`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-700 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white mt-4 py-4 rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-4 px-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`nav-link ${activeSection === link.id ? 'text-blue-600 font-semibold' : 'text-slate-700'}`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
