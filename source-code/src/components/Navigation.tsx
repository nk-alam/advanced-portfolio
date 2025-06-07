import React, { useState, useEffect } from 'react';
import { Terminal, Code, Target, Briefcase, Calculator, Mail } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Terminal },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'games', label: 'Games', icon: Target },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'budget', label: 'Budget', icon: Calculator },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-matrix-black/90 backdrop-blur-sm border-b border-matrix-green/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-matrix-green font-hacker">
            <span className="animate-pulse-green">NK_ALAM.exe</span>
          </div>

          <div className="hidden md:flex space-x-1">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`px-4 py-2 rounded-md transition-all duration-300 flex items-center space-x-2 group ${
                  activeSection === id
                    ? 'bg-matrix-green/20 text-matrix-green shadow-matrix'
                    : 'text-matrix-green/70 hover:text-matrix-green hover:bg-matrix-green/10'
                }`}
              >
                <Icon size={16} className="group-hover:animate-pulse" />
                <span>{label}</span>
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button className="text-matrix-green p-2">
              <Terminal size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;