import React, { useState } from "react";
import { useMemo } from "react";
import Result from "../Result/Result";
import { ToastContainer, toast } from "react-toastify";
import "./Test.css";

function Test({ questions: { title, questions } }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);

  const currentQuestion = questions[currentIndex];

const saveAnswerAndNext = () => {
  if (!selectedAnswer) {
    toast("Iltimos javobni belgilang", { type: "warning" });
    return;
  }

  const answerData = {
    question: currentQuestion.question,
    selectedAnswer,
    correctAnswer: currentQuestion.answer,
    isCorrect: selectedAnswer === currentQuestion.answer,
  };

  setAnswers(prev => {
    const updated = [...prev];
    updated[currentIndex] = answerData;
    return updated;
  });

  setSelectedAnswer(null);
  setCurrentIndex(prev => prev + 1);
};


  const correctAnswerCount = useMemo(
    () => answers.filter((a) => a?.isCorrect).length,
    [answers],
  );

  if (currentIndex === questions.length) {
    return (
      <Result
        title={title}
        correctAnswerCount={correctAnswerCount}
        answers={answers}
        questionsLength={questions.length}
      />
    );
  }

  return (
    <>
      <ToastContainer />
      <div className="test__main">
        <div className="test__title">
          <h3>{title}</h3>
          <p>
            Savol {currentIndex + 1} / {questions.length}
          </p>
          <h2 className="test__question">{currentQuestion.question}</h2>
        </div>
        <div className="test__right">
          <ul className="test__container">
            {currentQuestion.options.map((option, index) => (
              <li key={index}>
                <label className={selectedAnswer === option ? "active" : ""}>
                  <input
                    type="radio"
                    name="option"
                    checked={selectedAnswer === option}
                    onChange={() => setSelectedAnswer(option)}
                  />
                  <span className="test__code">
                    {String.fromCharCode(65 + index)}
                     
                  </span>
                  <span>
                    {option}
                  </span>
                 
                </label>
              </li>
            ))}
          </ul>

          <button className="test__btn" onClick={saveAnswerAndNext}>
            {currentIndex + 1 === questions.length
              ? "Yakunlash"
              : "Keyingi Savol"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Test;
