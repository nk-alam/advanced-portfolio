import React from 'react';
import { Toaster } from 'react-hot-toast';
import Navigation from './components/Navigation';
import TerminalHero from './components/TerminalHero';
import SkillsMatrix from './components/SkillsMatrix';
import InteractiveGames from './components/InteractiveGames';
import StartupTracker from './components/StartupTracker';
import ProjectShowcase from './components/ProjectShowcase';
import BudgetPlanner from './components/BudgetPlanner';
import ContactSystem from './components/ContactSystem';
import PhotoReveal from './components/PhotoReveal';
import MatrixRain from './components/MatrixRain';

function App() {
  return (
    <div className="min-h-screen bg-matrix-black text-matrix-green font-mono relative overflow-x-hidden">
      <MatrixRain />
      <Navigation />
      
      <main className="relative z-10">
        <TerminalHero />
        <PhotoReveal />
        <SkillsMatrix />
        <InteractiveGames />
        <StartupTracker />
        <ProjectShowcase />
        <BudgetPlanner />
        <ContactSystem />
      </main>
      
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#1a1a1a',
            color: '#00ff41',
            border: '1px solid #00ff41',
            fontFamily: 'monospace',
          },
        }}
      />
    </div>
  );
}

export default App;