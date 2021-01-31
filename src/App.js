import './App.css';
import './style.css';
import './faq.css';
import React, { useState} from 'react';
import Question from './question'

function App() {

  const [questions, setQuestion] = useState([
    {
      "question": 'How many team members can I invite?',
      "answer": "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
    },
    {
      "question": 'What is the maximum file upload size?',
      "answer": "No more than 2GB. All files in your account must fit your allotted storage space."
    },
    {
      "question": 'How do I reset my password?',
      "answer": "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
    },
    {
      "question": 'Can I cancel my subscription?',
      "answer": "Yes! Send us a message and we’ll process your request no questions asked."
    },
    {
      "question": 'Do you provide additional support?',
      "answer": "Chat and email support is available 24/7. Phone lines are open during normal business hours."
    }
  ]);

  return (

    <div id="wrapper">
    <div className="container">
      <h1>FAQ</h1>

      <Question quest={questions[0]["question"]} answ={questions[0]["answer"]} />
      <Question quest={questions[1]["question"]} answ={questions[1]["answer"]} />
      <Question quest={questions[2]["question"]} answ={questions[2]["answer"]} />
      <Question quest={questions[3]["question"]} answ={questions[3]["answer"]} />
      <Question quest={questions[4]["question"]} answ={questions[4]["answer"]} />

    </div>
  </div>
  );
}

export default App;
