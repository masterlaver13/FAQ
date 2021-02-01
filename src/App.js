import './style.css';
import './faq.css';
import React, {useState} from 'react';
import Question from './question'

function App() {

  const [questions, setQuestion] = useState([
    {
      question: 'How many team members can I invite?',
      answer: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
      open: false
    },
    {
      question: 'What is the maximum file upload size?',
      answer: "No more than 2GB. All files in your account must fit your allotted storage space.",
      open: false
    },
    {
      question: 'How do I reset my password?',
      answer: "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
      open: false
    },
    {
      question: 'Can I cancel my subscription?',
      answer: "Yes! Send us a message and we’ll process your request no questions asked.",
      open: false
    },
    {
      question: 'Do you provide additional support?',
      answer: "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
      open: false
    }
  ]);

  const toggleFAQ = index =>{
    setQuestion(questions.map((question, i) => {
      if(i===index){question.open = !question.open;}
      else {question.open = false;}

      return question;
    }))
  }


  return (
    <div id="wrapper">
      <h1 id="header">FAQ</h1>

      {questions.map((question, i) => (
            <Question question={question} index={i} key={i} toggleFAQ={toggleFAQ}/>
        ))}

    </div>
  );
}

export default App;
