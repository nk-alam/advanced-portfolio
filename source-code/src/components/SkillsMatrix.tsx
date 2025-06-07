import React, { useState } from 'react';
import { Code, Database, Server, Smartphone, Cloud, Shield } from 'lucide-react';

const SkillsMatrix = () => {
  const [selectedCategory, setSelectedCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      icon: Code,
      title: 'Frontend Mastery',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Vue.js', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'JavaScript ES6+', level: 98 }
      ]
    },
    backend: {
      icon: Server,
      title: 'Backend Engineering',
      skills: [
        { name: 'Node.js', level: 92 },
        { name: 'Python/Django', level: 88 },
        { name: 'GraphQL', level: 85 },
        { name: 'REST APIs', level: 95 },
        { name: 'Microservices', level: 80 }
      ]
    },
    database: {
      icon: Database,
      title: 'Database Systems',
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'MongoDB', level: 88 },
        { name: 'Redis', level: 85 },
        { name: 'Elasticsearch', level: 75 },
        { name: 'Database Design', level: 92 }
      ]
    },
    mobile: {
      icon: Smartphone,
      title: 'Mobile Development',
      skills: [
        { name: 'React Native', level: 88 },
        { name: 'Flutter', level: 75 },
        { name: 'PWA Development', level: 90 },
        { name: 'Mobile UI/UX', level: 85 },
        { name: 'App Store Deploy', level: 80 }
      ]
    },
    devops: {
      icon: Cloud,
      title: 'DevOps & Cloud',
      skills: [
        { name: 'AWS/Azure', level: 85 },
        { name: 'Docker/Kubernetes', level: 82 },
        { name: 'CI/CD Pipelines', level: 88 },
        { name: 'Linux Administration', level: 90 },
        { name: 'Infrastructure as Code', level: 78 }
      ]
    },
    security: {
      icon: Shield,
      title: 'Security & Testing',
      skills: [
        { name: 'Cybersecurity', level: 85 },
        { name: 'Penetration Testing', level: 75 },
        { name: 'Unit/Integration Testing', level: 90 },
        { name: 'Security Audits', level: 80 },
        { name: 'OWASP Best Practices', level: 88 }
      ]
    }
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-matrix-green mb-4 font-hacker">
            SKILL MATRIX INITIALIZED
          </h2>
          <p className="text-matrix-green/70">Elite technical capabilities across the full development stack</p>
        </div>

        <div className="grid md:grid-cols-6 gap-4 mb-8">
          {Object.entries(skillCategories).map(([key, category]) => {
            const Icon = category.icon;
            return (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`p-4 rounded-lg border transition-all duration-300 ${
                  selectedCategory === key
                    ? 'bg-matrix-green/20 border-matrix-green shadow-matrix'
                    : 'bg-matrix-darkGray border-matrix-green/30 hover:border-matrix-green/60'
                }`}
              >
                <Icon size={24} className="mx-auto mb-2 text-matrix-green" />
                <div className="text-xs text-matrix-green/80 text-center">
                  {category.title}
                </div>
              </button>
            );
          })}
        </div>

        <div className="bg-matrix-darkGray border border-matrix-green/30 rounded-lg p-8 shadow-glow">
          <h3 className="text-xl font-bold text-matrix-green mb-6">
            {skillCategories[selectedCategory as keyof typeof skillCategories].title}
          </h3>

          <div className="space-y-4">
            {skillCategories[selectedCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-matrix-green">{skill.name}</span>
                  <span className="text-matrix-green/70">{skill.level}%</span>
                </div>
                <div className="w-full bg-matrix-gray rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-matrix-green to-matrix-darkGreen h-2 rounded-full transition-all duration-1000 ease-out shadow-matrix"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsMatrix;