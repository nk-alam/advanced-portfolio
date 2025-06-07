import React, { useState } from 'react';
import { Play, Target, Code, Cpu, Brain, Terminal } from 'lucide-react';
import CodeGolfChallenge from './games/CodeGolfChallenge';
import ApiDebugGame from './games/ApiDebugGame';
import TechQuiz from './games/TechQuiz';

const InteractiveGames = () => {
  const [activeGame, setActiveGame] = useState<string | null>(null);

  const games = [
    {
      id: 'code-golf',
      title: 'Code Golf Challenge',
      description: 'Solve coding problems with the shortest possible solution',
      icon: Code,
      difficulty: 'Expert',
      component: CodeGolfChallenge
    },
    {
      id: 'api-debug',
      title: 'API Debug Hunt',
      description: 'Find and fix bugs in sample API responses',
      icon: Target,
      difficulty: 'Advanced',
      component: ApiDebugGame
    },
    {
      id: 'tech-quiz',
      title: 'Tech Stack Quiz',
      description: 'Test your knowledge of modern development tools',
      icon: Brain,
      difficulty: 'Intermediate',
      component: TechQuiz
    }
  ];

  if (activeGame) {
    const GameComponent = games.find(g => g.id === activeGame)?.component;
    return (
      <section id="games\" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <button
            onClick={() => setActiveGame(null)}
            className="mb-8 text-matrix-green hover:text-matrix-darkGreen transition-colors"
          >
            ← Back to Games
          </button>
          {GameComponent && <GameComponent />}
        </div>
      </section>
    );
  }

  return (
    <section id="games" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-matrix-green mb-4 font-hacker">
            DEVELOPER CHALLENGE ARENA
          </h2>
          <p className="text-matrix-green/70">Test your skills with interactive coding challenges</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {games.map((game) => {
            const Icon = game.icon;
            return (
              <div
                key={game.id}
                className="bg-matrix-darkGray border border-matrix-green/30 rounded-lg p-6 hover:border-matrix-green/60 transition-all duration-300 group cursor-pointer"
                onClick={() => setActiveGame(game.id)}
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon size={32} className="text-matrix-green group-hover:animate-pulse" />
                  <span className="text-xs px-2 py-1 bg-matrix-green/20 text-matrix-green rounded">
                    {game.difficulty}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-matrix-green mb-2">{game.title}</h3>
                <p className="text-matrix-green/70 text-sm mb-4">{game.description}</p>
                
                <button className="flex items-center space-x-2 text-matrix-green hover:text-matrix-darkGreen transition-colors">
                  <Play size={16} />
                  <span>Start Challenge</span>
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-matrix-darkGray border border-matrix-green/30 rounded-lg p-6">
          <div className="flex items-center space-x-4 mb-4">
            <Terminal size={24} className="text-matrix-green" />
            <h3 className="text-lg font-bold text-matrix-green">Terminal Simulator</h3>
          </div>
          <p className="text-matrix-green/70 mb-4">
            Try out basic commands in our simulated terminal environment
          </p>
          <div className="bg-matrix-black rounded p-4 font-mono text-sm">
            <div className="text-matrix-green">
              visitor@nk-alam:~$ <span className="animate-pulse">_</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveGames;