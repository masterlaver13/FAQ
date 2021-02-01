import './style.css';
import './faq.css';
import React, {useState} from 'react';
import Question from './question'

function App() {

  const [currIndex, setCurrIndex] = useState(0);

  const [questions, setQuestion] = useState([
    {
      "question": 'How many team members can I invite?',
      "answer": "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
    }, {
      "question": 'What is the maximum file upload size?',
      "answer": "No more than 2GB. All files in your account must fit your allotted storage space."
    }, {
      "question": 'How do I reset my password?',
      "answer": "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
    }, {
      "question": 'Can I cancel my subscription?',
      "answer": "Yes! Send us a message and we’ll process your request no questions asked."
    }, {
      "question": 'Do you provide additional support?',
      "answer": "Chat and email support is available 24/7. Phone lines are open during normal business hours."
    }
  ]);

  return (<div id="wrapper">
    <h1>FAQ</h1>

    <Question question={questions[0]["question"]} answer={questions[0]["answer"]}/>
    <Question question={questions[1]["question"]} answer={questions[1]["answer"]}/>
    <Question question={questions[2]["question"]} answer={questions[2]["answer"]}/>
    <Question question={questions[3]["question"]} answer={questions[3]["answer"]}/>
    <Question question={questions[4]["question"]} answer={questions[4]["answer"]}/>

  </div>);
}

export default App;
