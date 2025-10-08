import { useState } from 'react'
import './App.css'
import Flashcard from "./Flashcard";

function App() {
  const flashcards = [
    {
      question: "What is a Product Manager?",
      answer:
        "A Product Manager is responsible for defining the vision, strategy, and roadmap of a product and ensuring it meets customer needs.",
    },
    {
      question: "Key responsibilities?",
      answer:
        "Key responsibilities include market research, prioritizing features, defining the product roadmap, collaborating with teams, and measuring success metrics.",
    },
    {
      question: "What is an MVP?",
      answer:
        "An MVP (Minimum Viable Product) is the simplest version of a product that can be released to test assumptions and gather user feedback.",
    },
    {
      question: "What is a Product Roadmap?",
      answer:
        "A Product Roadmap is a high-level plan showing the vision, goals, and timeline for product development and releases.",
    },
    {
      question: "What is Agile?",
      answer:
        "Agile is a project management approach that focuses on iterative development, collaboration, and flexibility to adapt to changing requirements.",
    },
    {
      question: "What is Scrum?",
      answer:
        "Scrum is an Agile framework that organizes work into sprints, with defined roles like Product Owner, Scrum Master, and Development Team.",
    },
    {
      question: "What is a User Story?",
      answer:
        "A User Story is a short description of a feature from the perspective of the end user, usually 'As a [user], I want [goal] so that [benefit]'.",
    },
    {
      question: "What is a KPI?",
      answer:
        "A KPI (Key Performance Indicator) is a measurable value that indicates how well a product, team, or company is achieving its objectives.",
    },
    {
      question: "What is A/B Testing?",
      answer:
        "A/B Testing is a method of comparing two versions of a product or feature to see which performs better based on user behavior or metrics.",
    },
    {
      question: "What is Product-Market Fit?",
      answer:
        "Product-Market Fit occurs when a product meets the needs of a target market and customers are willing to use and pay for it consistently.",
    },
  ];



  return (
    <div>
      <h1>The Ultimate PM Overview</h1>
      <p>Test Your Product Management Knowledge with this set of {flashcards.length} Flashcards!</p>
      <p>Click the Flashcard to flip the card.</p>
      <Flashcard flashcards={flashcards} />
    </div>
  );
}

export default App;
