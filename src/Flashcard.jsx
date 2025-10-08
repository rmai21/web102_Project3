import "./Flashcard.css";
import React, { useState } from "react";

const Flashcard = ({ flashcards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const nextCard = () => {
    setCurrentIndex((prev) =>
      prev < flashcards.length - 1 ? prev + 1 : prev
    );
    setShowAnswer(false);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
    setShowAnswer(false); 
  };

  const flipCard = () => {
    setShowAnswer((prev) => !prev); 
  };

  return (
    <div>
      <div className="card" onClick={flipCard}>
        <h2>{showAnswer ? flashcards[currentIndex].answer : flashcards[currentIndex].question}</h2>
      </div>

      <div className="navigation-buttons">
        <button onClick={prevCard} disabled={currentIndex === 0}>
          Previous
        </button>
        <button
          onClick={nextCard}
          disabled={currentIndex === flashcards.length - 1}
        >
          Next
        </button>
      </div>

      <div className="progress-indicator">
        <p>
          Card {currentIndex + 1} of {flashcards.length}
        </p>
      </div>
    </div>
  );
};

export default Flashcard;
