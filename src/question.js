import React from 'react';
import './style.css';
import './faq.css';

export default function Question({question, answer}) {

  const questionStyle = {};
  const answerStyle = {};

  return (< div className = "container" > <div id="question">
    <a href="#question1">{question}</a>
    <div className="answer">
      <p>
        {answer}
      </p>
    </div>
  </div> < /div>
);

}