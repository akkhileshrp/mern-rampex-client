import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";
import './Components/Page5.css';

const Page5 = () => {
  const [answers, setAnswers] = useState({
    questionSixteen: '',
    questionSeventeen: '',
    questionEighteen: '',
    questionNineteen: '',
    questionTwenty: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAnswers(prevState => ({
      ...prevState,
      [name]: value
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
    fetch("http://localhost:8000/feedback/page5", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(answers)
    })
      .then((response) => {
        if (response.ok) {
          successMessage();
          setAnswers({
            questionSixteen: '',
            questionSeventeen: '',
            questionEighteen: '',
            questionNineteen: '',
            questionTwenty: ''
          })
          navigate("/final");
        } else errorMessage();
        return response.json();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="page5-container">
      <h2>Feedback Form - Page 5</h2>
      <div className="question">
        <label>How would you rate the friendliness of the staff?</label>
        <select name="questionSixteen" value={answers.questionSixteen} onChange={handleInputChange}>
          <option value="" hidden>Select option</option>
          <option value="Excellent">Excellent</option>
          <option value="Good">Good</option>
          <option value="Average">Average</option>
          <option value="Poor">Poor</option>
        </select>
      </div>
      <div className="question">
        <label>Were you provided with enough information about your treatment options?</label>
        <select name="questionSeventeen" value={answers.questionSeventeen} onChange={handleInputChange}>
          <option value="" hidden>Select option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="question">
        <label>How satisfied are you with the overall quality of care you received?</label>
        <select name="questionEighteen" value={answers.questionEighteen} onChange={handleInputChange}>
          <option value="" hidden>Select option</option>
          <option value="Very Satisfied">Very Satisfied</option>
          <option value="Satisfied">Satisfied</option>
          <option value="Neutral">Neutral</option>
          <option value="Dissatisfied">Dissatisfied</option>
          <option value="Very Dissatisfied">Very Dissatisfied</option>
        </select>
      </div>
      <div className="question">
        <label>Did you experience any issues with billing or insurance?</label>
        <select name="questionNineteen" value={answers.questionNineteen} onChange={handleInputChange}>
          <option value="" hidden>Select option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="question">
        <label>How likely are you to return for future treatments?</label>
        <select name="questionTwenty" value={answers.questionTwenty} onChange={handleInputChange}>
          <option value="" hidden>Select option</option>
          <option value="Very Likely">Very Likely</option>
          <option value="Likely">Likely</option>
          <option value="Neutral">Neutral</option>
          <option value="Unlikely">Unlikely</option>
          <option value="Very Unlikely">Very Unlikely</option>
        </select>
      </div>
      <button onClick={handleSubmit} className='btn'>Next</button>
    </div>
  );
};

export default Page5;

