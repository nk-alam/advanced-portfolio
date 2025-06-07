import React, { useState } from 'react';
import { Brain, CheckCircle, XCircle } from 'lucide-react';

const TechQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "Which Indian startup became a unicorn in 2023?",
      options: [
        "Boat (Imagine Marketing)",
        "Ola Electric",
        "Razorpay",
        "All of the above"
      ],
      correct: 3,
      explanation: "Multiple Indian startups achieved unicorn status in 2023, including Boat, Ola Electric, and Razorpay reached new valuations."
    },
    {
      question: "What is the primary benefit of React Server Components?",
      options: [
        "Faster client-side rendering",
        "Reduced JavaScript bundle size",
        "Better SEO optimization",
        "All of the above"
      ],
      correct: 3,
      explanation: "React Server Components provide all these benefits by rendering on the server and sending HTML to the client."
    },
    {
      question: "Which city is known as India's Silicon Valley?",
      options: [
        "Mumbai",
        "Bangalore",
        "Hyderabad",
        "Pune"
      ],
      correct: 1,
      explanation: "Bangalore is widely recognized as India's Silicon Valley due to its concentration of tech companies and startups."
    },
    {
      question: "What does 'CAP theorem' stand for in distributed systems?",
      options: [
        "Consistency, Availability, Partition tolerance",
        "Caching, Authentication, Performance",
        "Concurrency, Atomicity, Persistence",
        "Clustering, Aggregation, Processing"
      ],
      correct: 0,
      explanation: "CAP theorem states that in distributed systems, you can only guarantee two out of three: Consistency, Availability, and Partition tolerance."
    }
  ];

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
  };

  const score = selectedAnswers.reduce((acc, answer, index) => {
    return acc + (answer === questions[index].correct ? 1 : 0);
  }, 0);

  if (showResults) {
    return (
      <div className="bg-matrix-darkGray border border-matrix-green/30 rounded-lg p-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-matrix-green mb-4">Quiz Complete!</h3>
          <div className="text-4xl mb-4">
            {score === questions.length ? '🏆' : score >= questions.length / 2 ? '🎉' : '📚'}
          </div>
          <p className="text-xl text-matrix-green mb-6">
            You scored {score}/{questions.length}
          </p>
          <div className="space-y-4 mb-6">
            {questions.map((question, index) => (
              <div key={index} className="text-left bg-matrix-black rounded p-4">
                <p className="text-matrix-green font-semibold mb-2">{question.question}</p>
                <div className="flex items-center space-x-2 mb-2">
                  {selectedAnswers[index] === question.correct ? (
                    <CheckCircle size={16} className="text-matrix-green" />
                  ) : (
                    <XCircle size={16} className="text-red-400" />
                  )}
                  <span className="text-sm text-matrix-green/70">
                    Your answer: {question.options[selectedAnswers[index]]}
                  </span>
                </div>
                <p className="text-xs text-matrix-green/60">{question.explanation}</p>
              </div>
            ))}
          </div>
          <button
            onClick={resetQuiz}
            className="bg-matrix-green text-matrix-black px-6 py-2 rounded hover:bg-matrix-darkGreen transition-colors"
          >
            Retake Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-matrix-darkGray border border-matrix-green/30 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-matrix-green flex items-center space-x-2">
          <Brain size={24} />
          <span>Tech Stack Quiz</span>
        </h3>
        <div className="text-matrix-green/70">
          Question {currentQuestion + 1}/{questions.length}
        </div>
      </div>

      <div className="mb-8">
        <h4 className="text-lg text-matrix-green mb-4">
          {questions[currentQuestion].question}
        </h4>
        
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className={`w-full text-left p-4 rounded border transition-all ${
                selectedAnswers[currentQuestion] === index
                  ? 'bg-matrix-green/20 border-matrix-green text-matrix-green'
                  : 'bg-matrix-black border-matrix-green/30 text-matrix-green/80 hover:border-matrix-green/60'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between">
        <div className="text-matrix-green/70">
          Progress: {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
        </div>
        <button
          onClick={nextQuestion}
          disabled={selectedAnswers[currentQuestion] === undefined}
          className="bg-matrix-green text-matrix-black px-6 py-2 rounded hover:bg-matrix-darkGreen transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
        </button>
      </div>
    </div>
  );
};

export default TechQuiz;