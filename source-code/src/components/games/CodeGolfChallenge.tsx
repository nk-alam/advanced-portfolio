import React, { useState } from 'react';
import { Check, X, Trophy } from 'lucide-react';

const CodeGolfChallenge = () => {
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [userCode, setUserCode] = useState('');
  const [result, setResult] = useState<{ passed: boolean; message: string } | null>(null);

  const challenges = [
    {
      title: 'FizzBuzz Golf',
      description: 'Write the shortest FizzBuzz solution (1-100)',
      testCases: [
        { input: 3, expected: 'Fizz' },
        { input: 5, expected: 'Buzz' },
        { input: 15, expected: 'FizzBuzz' },
        { input: 7, expected: '7' }
      ],
      starter: 'function fizzBuzz(n) {\n  // Your code here\n}'
    },
    {
      title: 'Palindrome Check',
      description: 'Check if a string is a palindrome (shortest solution)',
      testCases: [
        { input: 'racecar', expected: true },
        { input: 'hello', expected: false },
        { input: 'A man a plan a canal Panama', expected: true }
      ],
      starter: 'function isPalindrome(str) {\n  // Your code here\n}'
    }
  ];

  const runTest = () => {
    try {
      // Simple evaluation for demo purposes
      const func = new Function('return ' + userCode)();
      const challenge = challenges[currentChallenge];
      
      let passed = true;
      let message = 'All tests passed!';
      
      for (const test of challenge.testCases) {
        const result = func(test.input);
        if (result !== test.expected) {
          passed = false;
          message = `Test failed for input: ${test.input}. Expected: ${test.expected}, Got: ${result}`;
          break;
        }
      }
      
      setResult({ passed, message });
    } catch (error) {
      setResult({ passed: false, message: 'Code execution error: ' + (error as Error).message });
    }
  };

  return (
    <div className="bg-matrix-darkGray border border-matrix-green/30 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-matrix-green">Code Golf Challenge</h3>
        <div className="flex items-center space-x-2 text-matrix-green/70">
          <Trophy size={16} />
          <span>Character Count: {userCode.length}</span>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold text-matrix-green mb-2">
          {challenges[currentChallenge].title}
        </h4>
        <p className="text-matrix-green/70 mb-4">
          {challenges[currentChallenge].description}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-matrix-green mb-2">Your Solution:</label>
          <textarea
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            placeholder={challenges[currentChallenge].starter}
            className="w-full h-40 bg-matrix-black border border-matrix-green/30 rounded p-3 text-matrix-green font-mono text-sm resize-none focus:border-matrix-green focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-matrix-green mb-2">Test Cases:</label>
          <div className="bg-matrix-black border border-matrix-green/30 rounded p-3 h-40 overflow-y-auto">
            {challenges[currentChallenge].testCases.map((test, index) => (
              <div key={index} className="text-sm text-matrix-green/70 mb-2">
                Input: {JSON.stringify(test.input)} → Expected: {JSON.stringify(test.expected)}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <button
          onClick={runTest}
          className="bg-matrix-green text-matrix-black px-6 py-2 rounded hover:bg-matrix-darkGreen transition-colors"
        >
          Run Tests
        </button>

        {result && (
          <div className={`flex items-center space-x-2 ${result.passed ? 'text-matrix-green' : 'text-red-400'}`}>
            {result.passed ? <Check size={16} /> : <X size={16} />}
            <span>{result.message}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeGolfChallenge;