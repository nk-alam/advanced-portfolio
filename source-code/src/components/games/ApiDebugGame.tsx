import React, { useState } from 'react';
import { Bug, CheckCircle, XCircle } from 'lucide-react';

const ApiDebugGame = () => {
  const [selectedBugs, setSelectedBugs] = useState<number[]>([]);
  const [showSolution, setShowSolution] = useState(false);

  const buggyResponse = {
    status: 200,
    data: {
      users: [
        {
          id: "1",
          name: "John Doe",
          email: "john@example.com",
          created_at: "2023-01-15T10:30:00Z",
          is_active: "true", // Bug 1: Should be boolean
          profile: {
            age: 30,
            location: null,
            preferences: ["coding", "gaming"]
          }
        },
        {
          id: 2, // Bug 2: Inconsistent type (should be string)
          name: "Jane Smith",
          email: "jane.smith@example.com", // Bug 3: Invalid email format
          created_at: "2023-02-20T14:45:00", // Bug 4: Missing timezone
          is_active: true,
          profile: {
            age: "28", // Bug 5: Should be number
            location: "New York",
            preferences: ["design", "travel"]
          }
        }
      ],
      meta: {
        total: 2,
        page: 1,
        per_page: 10,
        has_more: false
      }
    }
  };

  const bugs = [
    { id: 1, description: "is_active should be boolean, not string", line: 11 },
    { id: 2, description: "ID should be consistent type (string)", line: 19 },
    { id: 3, description: "Invalid email format", line: 22 },
    { id: 4, description: "Missing timezone in created_at", line: 23 },
    { id: 5, description: "Age should be number, not string", line: 27 }
  ];

  const toggleBug = (bugId: number) => {
    setSelectedBugs(prev => 
      prev.includes(bugId) 
        ? prev.filter(id => id !== bugId)
        : [...prev, bugId]
    );
  };

  const checkSolution = () => {
    setShowSolution(true);
  };

  const score = selectedBugs.length;
  const maxScore = bugs.length;

  return (
    <div className="bg-matrix-darkGray border border-matrix-green/30 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-matrix-green flex items-center space-x-2">
          <Bug size={24} />
          <span>API Debug Hunt</span>
        </h3>
        <div className="text-matrix-green/70">
          Score: {score}/{maxScore}
        </div>
      </div>

      <p className="text-matrix-green/70 mb-6">
        Find all the bugs in this API response. Click on the line numbers where you spot issues.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-matrix-green mb-2">Buggy API Response:</label>
          <div className="bg-matrix-black border border-matrix-green/30 rounded p-4 h-96 overflow-y-auto">
            <pre className="text-sm text-matrix-green font-mono">
              <code>
{JSON.stringify(buggyResponse, null, 2).split('\n').map((line, index) => {
  const lineNumber = index + 1;
  const hasBug = bugs.some(bug => bug.line === lineNumber);
  const isSelected = selectedBugs.some(id => bugs.find(bug => bug.id === id)?.line === lineNumber);
  
  return (
    <div key={index} className="flex">
      <span 
        className={`w-8 text-right mr-4 cursor-pointer select-none ${
          hasBug 
            ? isSelected 
              ? 'text-matrix-green bg-matrix-green/20' 
              : 'text-red-400 hover:bg-red-400/10'
            : 'text-matrix-green/50'
        }`}
        onClick={() => hasBug && toggleBug(bugs.find(bug => bug.line === lineNumber)!.id)}
      >
        {lineNumber}
      </span>
      <span>{line}</span>
    </div>
  );
})}
              </code>
            </pre>
          </div>
        </div>

        <div>
          <label className="block text-matrix-green mb-2">Bugs Found:</label>
          <div className="bg-matrix-black border border-matrix-green/30 rounded p-4 h-96 overflow-y-auto">
            {bugs.map(bug => (
              <div 
                key={bug.id} 
                className={`flex items-center space-x-2 mb-3 p-2 rounded ${
                  selectedBugs.includes(bug.id) 
                    ? 'bg-matrix-green/20 text-matrix-green' 
                    : 'text-matrix-green/50'
                }`}
              >
                {selectedBugs.includes(bug.id) ? (
                  <CheckCircle size={16} className="text-matrix-green" />
                ) : (
                  <XCircle size={16} className="text-matrix-green/30" />
                )}
                <span className="text-sm">Line {bug.line}: {bug.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <button
          onClick={checkSolution}
          className="bg-matrix-green text-matrix-black px-6 py-2 rounded hover:bg-matrix-darkGreen transition-colors"
        >
          Check Solution
        </button>

        {showSolution && (
          <div className="text-matrix-green">
            {score === maxScore 
              ? "Perfect! You found all bugs! 🎉" 
              : `You found ${score}/${maxScore} bugs. Keep looking!`
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default ApiDebugGame;