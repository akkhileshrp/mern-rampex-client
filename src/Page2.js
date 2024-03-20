import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./Components/Page2.css";
import { useNavigate } from "react-router-dom";
const Page2 = () => {
  const [answers, setAnswers] = useState({
    questionOne: "",
    questionTwo: "",
    questionThree: "",
    questionFour: "",
    questionFive: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  const successMessage = () => {
    toast.success("Feedback submitted successfully");
  };
  const errorMessage = () => {
    toast.error("Error while submitting feedback");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/feedback", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(answers)
    })
      .then((response) => {
        if (response.ok) {
          successMessage();
          setAnswers({
            questionOne: "",
            questionTwo: "",
            questionThree: "",
            questionFour: "",
            questionFive: "",
          })
          navigate("/page3");
        } else errorMessage();
        return response.json();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="page2-container">
      <h2>Feedback Form - Page 2</h2>
      <div className="question">
        <label>How would you rate the cleanliness of the facility?</label>
        <select
          name="questionOne"
          value={answers.questionOne}
          onChange={handleInputChange}
        >
          <option value="" hidden>Select option</option>
          <option value="Excellent">Excellent</option>
          <option value="Good">Good</option>
          <option value="Average">Average</option>
          <option value="Poor">Poor</option>
        </select>
      </div>
      <div className="question">
        <label>Did you feel welcomed upon arrival?</label>
        <select
          name="questionTwo"
          value={answers.questionTwo}
          onChange={handleInputChange}
        >
          <option value="" hidden>Select option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="question">
        <label>How comfortable were the waiting room facilities?</label>
        <select
          name="questionThree"
          value={answers.questionThree}
          onChange={handleInputChange}
        >
          <option value="" hidden>Select option</option>
          <option value="Highly Satisfied">Highly Satisfied</option>
          <option value="Satisfied">Satisfied</option>
          <option value="Neutral">Neutral</option>
          <option value="Dissatisfied">Dissatisfied</option>
          <option value="Highly Dissatisfied">Highly Dissatisfied</option>
        </select>
      </div>
      <div className="question">
        <label>Were you provided with sufficient information about your treatment plan?</label>
        <select
          name="questionFour"
          value={answers.questionFour}
          onChange={handleInputChange}
        >
          <option value="" hidden>Select option</option>
          <option value="Strongly Agree">Strongly Agree</option>
          <option value="Agree">Agree</option>
          <option value="Neutral">Neutral</option>
          <option value="Disagree">Disagree</option>
          <option value="Strongly Disagree">Strongly Disagree</option>
        </select>
      </div>
      <div className="question">
        <label>How likely are you to recommend our services to others?</label>
        <select
          name="questionFive"
          value={answers.questionFive}
          onChange={handleInputChange}
        >
          <option value="" hidden>Select option</option>
          <option value="Very Likely">Very Likely</option>
          <option value="Likely">Likely</option>
          <option value="Unsure">Unsure</option>
          <option value="Unlikely">Unlikely</option>
          <option value="Very Unlikely">Very Unlikely</option>
        </select>
      </div>
      <button onClick={handleSubmit}>
        Next
      </button>
      <Toaster />
    </div>
  );
};

export default Page2;