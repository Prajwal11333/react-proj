import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './quiz.css';

const Quiz = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [currentPrompt, setCurrentPrompt] = useState("Loading...");
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const totalQuestions = 5;
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    // Logic to set webcam stream
    if (webcamRef.current) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          webcamRef.current.srcObject = stream;
        });
    }

    // Load initial prompt
    setCurrentPrompt("Hello"); // Replace with logic to fetch prompt
  }, []);

  const startQuiz = () => {
    setQuizStarted(true);
    // countdown logic can be added here
  };

  const submitSign = () => {
    // sign submission logic
    setScore((prev) => prev + 1);
    document.getElementById('feedback').textContent = "Good job!";
    document.getElementById('next-question').style.display = "inline-block";
  };

  const nextQuestion = () => {
    const next = currentQuestion + 1;
    if (next > totalQuestions) {
      setShowResults(true);
    } else {
      setCurrentQuestion(next);
      setCurrentPrompt("New Sign"); // update as needed
      document.getElementById('next-question').style.display = "none";
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(1);
    setScore(0);
    setShowResults(false);
    setCurrentPrompt("Hello");
  };

  return (
    <main id="quiz-content">
      <section className="quiz-container">
        <div className="container">
          <div className="quiz-card">
            <div className="quiz-header">
              <h2>Sign Language Quiz</h2>
              <p>Show the sign for the displayed prompt</p>
            </div>

            <div className="quiz-prompt">
              <h3>Please sign: <span id="current-prompt">{currentPrompt}</span></h3>
            </div>

            <div className="webcam-container">
              <div className="webcam-wrapper">
                <video id="webcam" ref={webcamRef} autoPlay playsInline />
                <canvas ref={canvasRef} id="canvas" style={{ display: 'none' }}></canvas>
                <div className="webcam-overlay">
                  <div id="countdown" className="countdown"></div>
                  <div id="feedback" className="feedback"></div>
                </div>
              </div>

              <div className="controls">
                <button onClick={startQuiz} className="btn primary-btn">Start Quiz</button>
                <button onClick={submitSign} className="btn secondary-btn" disabled={!quizStarted}>Submit Sign</button>
                <button onClick={nextQuestion} id="next-question" className="btn primary-btn" style={{ display: 'none' }}>Next Question</button>
              </div>
            </div>

            <div className="quiz-progress">
              <div className="progress-text">Question <span>{currentQuestion}</span> of <span>{totalQuestions}</span></div>
              <div className="progress-bar">
                <div className="progress-indicator" style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}></div>
              </div>
            </div>

            {showResults && (
              <div className="quiz-results">
                <h3>Quiz Results</h3>
                <div className="results-summary">
                  <div className="score">
                    <span>{score}</span>/<span>{totalQuestions}</span>
                  </div>
                  <div className="message" id="result-message">
                    {score >= 3 ? "Great job!" : "Keep practicing!"}
                  </div>
                </div>
                <button onClick={restartQuiz} className="btn primary-btn">Try Again</button>
                <Link to="/tutorials" className="btn secondary-btn">Back to Tutorials</Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Quiz;
