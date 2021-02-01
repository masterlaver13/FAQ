import React from 'react';
import './style.css';
import './faq.css';

export default function Question({question, index, toggleFAQ}) {

  return (
    <div
      className={"faq " + (question.open ? 'open': '')}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="question">{question.question}</div>
        <div className="answer">{question.answer}</div>

    </div>
  );
}
