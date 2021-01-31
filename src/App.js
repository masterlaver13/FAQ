import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div id="wrapper">
    <div class="container">
      <h1>FAQ</h1>

      <div id="question1">
        <a href="#question1">How many team members can I invite?</a>
        <div class="answer">
          <p>
            You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.
          </p>
        </div>
      </div>
    </div>

    <div class="container">
      <div id="question2">
        <a href="#question2">What is the maximum file upload size?</a>
        <div class="answer">
          <p>
            No more than 2GB. All files in your account must fit your allotted storage space.
          </p>
        </div>
      </div>
    </div>

    <div class="container">
      <div id="question3">
        <a href="#question3">How do I reset my password?</a>
        <div class="answer">
          <p>
            Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.
          </p>
        </div>
      </div>
    </div>

    <div class="container">
      <div id="question4">
        <a href="#question4">Can I cancel my subscription?</a>
        <div class="answer">
          <p>
            Yes! Send us a message and we’ll process your request no questions asked.
          </p>
        </div>
      </div>
    </div>

    <div class="container">
      <div id="question5">
        <a href="#question5">Do you provide additional support?</a>
        <div class="answer">
          <p>
            Chat and email support is available 24/7. Phone lines are open during normal business hours.
          </p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
