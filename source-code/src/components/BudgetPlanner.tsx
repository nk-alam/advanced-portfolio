import React, { useState } from 'react';
import { Calculator, Clock, DollarSign, CheckCircle } from 'lucide-react';

const BudgetPlanner = () => {
  const [projectType, setProjectType] = useState('');
  const [complexity, setComplexity] = useState('');
  const [timeline, setTimeline] = useState('');
  const [features, setFeatures] = useState<string[]>([]);
  const [estimate, setEstimate] = useState<{ min: number; max: number; timeline: string } | null>(null);

  const projectTypes = [
    { id: 'landing', name: 'Landing Page', basePrice: 500 },
    { id: 'business', name: 'Business Website', basePrice: 1500 },
    { id: 'webapp', name: 'Web Application', basePrice: 5000 },
    { id: 'mobile', name: 'Mobile App', basePrice: 8000 },
    { id: 'ecommerce', name: 'E-commerce Platform', basePrice: 12000 }
  ];

  const complexityLevels = [
    { id: 'basic', name: 'Basic', multiplier: 1 },
    { id: 'standard', name: 'Standard', multiplier: 1.5 },
    { id: 'advanced', name: 'Advanced', multiplier: 2.5 },
    { id: 'enterprise', name: 'Enterprise', multiplier: 4 }
  ];

  const timelineOptions = [
    { id: 'rush', name: '1-2 weeks (Rush)', multiplier: 1.5, timeline: '1-2 weeks' },
    { id: 'normal', name: '1 month', multiplier: 1, timeline: '3-4 weeks' },
    { id: 'standard', name: '2-3 months', multiplier: 0.9, timeline: '8-12 weeks' },
    { id: 'flexible', name: '3+ months', multiplier: 0.8, timeline: '12+ weeks' }
  ];

  const featureOptions = [
    { id: 'auth', name: 'User Authentication', price: 800 },
    { id: 'payment', name: 'Payment Integration', price: 1200 },
    { id: 'cms', name: 'Content Management', price: 1000 },
    { id: 'api', name: 'Third-party API Integration', price: 600 },
    { id: 'analytics', name: 'Analytics Dashboard', price: 1500 },
    { id: 'chat', name: 'Real-time Chat', price: 2000 },
    { id: 'mobile', name: 'Mobile App Companion', price: 5000 },
    { id: 'admin', name: 'Admin Panel', price: 2500 }
  ];

  const calculateEstimate = () => {
    if (!projectType || !complexity || !timeline) return;

    const baseProject = projectTypes.find(p => p.id === projectType);
    const complexityLevel = complexityLevels.find(c => c.id === complexity);
    const timelineOption = timelineOptions.find(t => t.id === timeline);

    if (!baseProject || !complexityLevel || !timelineOption) return;

    let basePrice = baseProject.basePrice * complexityLevel.multiplier * timelineOption.multiplier;
    
    const featuresPrice = features.reduce((sum, featureId) => {
      const feature = featureOptions.find(f => f.id === featureId);
      return sum + (feature?.price || 0);
    }, 0);

    const totalMin = Math.round(basePrice + featuresPrice);
    const totalMax = Math.round(totalMin * 1.3); // 30% buffer for scope creep

    setEstimate({
      min: totalMin,
      max: totalMax,
      timeline: timelineOption.timeline
    });
  };

  const toggleFeature = (featureId: string) => {
    setFeatures(prev =>
      prev.includes(featureId)
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  return (
    <section id="budget" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-matrix-green mb-4 font-hacker">
            PROJECT BUDGET CALCULATOR
          </h2>
          <p className="text-matrix-green/70">Get instant estimates for your development project</p>
        </div>

        <div className="bg-matrix-darkGray border border-matrix-green/30 rounded-lg p-8 shadow-glow">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Configuration */}
            <div className="space-y-6">
              {/* Project Type */}
              <div>
                <label className="block text-matrix-green font-semibold mb-3">Project Type:</label>
                <div className="space-y-2">
                  {projectTypes.map(type => (
                    <button
                      key={type.id}
                      onClick={() => setProjectType(type.id)}
                      className={`w-full text-left p-3 rounded border transition-all ${
                        projectType === type.id
                          ? 'bg-matrix-green/20 border-matrix-green'
                          : 'bg-matrix-black border-matrix-green/30 hover:border-matrix-green/60'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-matrix-green">{type.name}</span>
                        <span className="text-matrix-green/70 text-sm">from ${type.basePrice}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Complexity */}
              <div>
                <label className="block text-matrix-green font-semibold mb-3">Complexity Level:</label>
                <div className="grid grid-cols-2 gap-2">
                  {complexityLevels.map(level => (
                    <button
                      key={level.id}
                      onClick={() => setComplexity(level.id)}
                      className={`p-3 rounded border transition-all ${
                        complexity === level.id
                          ? 'bg-matrix-green/20 border-matrix-green'
                          : 'bg-matrix-black border-matrix-green/30 hover:border-matrix-green/60'
                      }`}
                    >
                      <span className="text-matrix-green">{level.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label className="block text-matrix-green font-semibold mb-3">Timeline:</label>
                <div className="space-y-2">
                  {timelineOptions.map(option => (
                    <button
                      key={option.id}
                      onClick={() => setTimeline(option.id)}
                      className={`w-full text-left p-3 rounded border transition-all ${
                        timeline === option.id
                          ? 'bg-matrix-green/20 border-matrix-green'
                          : 'bg-matrix-black border-matrix-green/30 hover:border-matrix-green/60'
                      }`}
                    >
                      <span className="text-matrix-green">{option.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Features & Estimate */}
            <div className="space-y-6">
              {/* Additional Features */}
              <div>
                <label className="block text-matrix-green font-semibold mb-3">Additional Features:</label>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {featureOptions.map(feature => (
                    <button
                      key={feature.id}
                      onClick={() => toggleFeature(feature.id)}
                      className={`w-full text-left p-3 rounded border transition-all ${
                        features.includes(feature.id)
                          ? 'bg-matrix-green/20 border-matrix-green'
                          : 'bg-matrix-black border-matrix-green/30 hover:border-matrix-green/60'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          {features.includes(feature.id) && (
                            <CheckCircle size={16} className="text-matrix-green" />
                          )}
                          <span className="text-matrix-green">{feature.name}</span>
                        </div>
                        <span className="text-matrix-green/70 text-sm">+${feature.price}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Calculate Button */}
              <button
                onClick={calculateEstimate}
                disabled={!projectType || !complexity || !timeline}
                className="w-full bg-matrix-green text-matrix-black py-3 rounded font-bold hover:bg-matrix-darkGreen transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <Calculator size={20} />
                <span>Calculate Estimate</span>
              </button>

              {/* Estimate Display */}
              {estimate && (
                <div className="bg-matrix-black border border-matrix-green rounded-lg p-6">
                  <h3 className="text-lg font-bold text-matrix-green mb-4 flex items-center space-x-2">
                    <DollarSign size={20} />
                    <span>Project Estimate</span>
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-matrix-green/70">Price Range:</span>
                      <span className="text-xl font-bold text-matrix-green">
                        ${estimate.min.toLocaleString()} - ${estimate.max.toLocaleString()}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-matrix-green/70">Timeline:</span>
                      <span className="text-matrix-green flex items-center space-x-1">
                        <Clock size={16} />
                        <span>{estimate.timeline}</span>
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-matrix-green/30">
                    <p className="text-xs text-matrix-green/60">
                      * Estimates are indicative and may vary based on specific requirements. 
                      Contact for detailed proposal.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetPlanner;