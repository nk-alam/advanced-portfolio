import React, { useState, useEffect } from 'react';
import { Terminal, ChevronRight } from 'lucide-react';

const TerminalHero = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [displayText, setDisplayText] = useState<string[]>([]);

  const terminalLines = [
    'Welcome to NK_ALAM.exe',
    'Initializing elite hacker profile...',
    'Loading full-stack capabilities...',
    'Connecting to Indian startup ecosystem...',
    'Ready to transform your business ideas into reality.',
    '',
    'Available for freelance projects and technical consulting.',
    'Specializing in React • Node.js • Next.js • Kotlin • Flutter',
    'Expert in building scalable web and mobile applications.',
    'Passionate about creating innovative solutions for startups.',
    'Let\'s collaborate and bring your vision to life!',
    '',
    'Type "help" for available commands or scroll to explore...'
  ];

  useEffect(() => {
    if (currentLine < terminalLines.length) {
      const line = terminalLines[currentLine];
      if (currentChar < line.length) {
        const timer = setTimeout(() => {
          setDisplayText(prev => {
            const newText = [...prev];
            if (!newText[currentLine]) newText[currentLine] = '';
            newText[currentLine] = line.substring(0, currentChar + 1);
            return newText;
          });
          setCurrentChar(prev => prev + 1);
        }, 50);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setCurrentLine(prev => prev + 1);
          setCurrentChar(0);
        }, 500);
        return () => clearTimeout(timer);
      }
    }
  }, [currentLine, currentChar, terminalLines]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="w-full max-w-4xl">
        <div className="bg-matrix-darkGray border border-matrix-green/30 rounded-lg overflow-hidden shadow-glow">
          {/* Terminal Header */}
          <div className="bg-matrix-gray border-b border-matrix-green/30 px-4 py-2 flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-matrix-green"></div>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Terminal size={16} />
              <span>nk_alam@elite-dev:~$</span>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 font-mono text-sm space-y-2">
            <div className="text-matrix-green mb-4">
              <pre className="text-xs">
{`
███╗   ██╗██╗  ██╗    ███╗   ███╗██╗
████╗  ██║██║ ██╔╝    ██╔██╗ ██║██║
██╔██╗ ██║█████╔╝     ██║╚██╗██║██║
██║╚██╗██║██╔═██╗     ██║ ╚████║██║
██║ ╚████║██║  ██╗    ██║  ╚███║███████╗
╚═╝  ╚═══╝╚═╝  ╚═╝    ╚═╝   ╚══╝╚══════╝
`}
              </pre>
            </div>

            {displayText.map((line, index) => (
              <div key={index} className="flex items-center">
                <ChevronRight size={16} className="text-matrix-green mr-2" />
                <span className="text-matrix-green">
                  {line}
                  {index === currentLine && (
                    <span className="animate-pulse ml-1 border-r-2 border-matrix-green">_</span>
                  )}
                </span>
              </div>
            ))}

            <div className="mt-8 flex items-center space-x-4">
              <button className="bg-matrix-green text-matrix-black px-6 py-2 rounded hover:bg-matrix-darkGreen transition-all duration-300 font-semibold">
                HIRE ME
              </button>
              <button className="border border-matrix-green text-matrix-green px-6 py-2 rounded hover:bg-matrix-green/10 transition-all duration-300">
                VIEW PROJECTS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalHero;