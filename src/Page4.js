import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from "react-hot-toast";
import './Components/Page4.css';

const Page4 = () => {
  const [answers, setAnswers] = useState({
    questionEleven: '',
    questionTweleve: '',
    questionThirteen: '',
    questionFouteen: '',
    questionFifteen: ''
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
    fetch("http://localhost:8000/feedback/page4", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(answers)
    })
      .then((response) => {
        if (response.ok) {
          successMessage();
          setAnswers({
            questionEleven: "",
            questionTweleve: "",
            questionThirteen: "",
            questionFouteen: "",
            questionFifteen: "",
          })
          navigate("/page5");
        } else errorMessage();
        return response.json();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="page4-container">
      <h2 className='g'>Feedback Form - Page 4</h2>
      <div className="question">
        <label>How satisfied are you with the cleanliness of the facilities?</label>
        <select name="questionEleven" value={answers.questionEleven} onChange={handleInputChange}>
          <option value="">Select option</option>
          <option value="Very Satisfied">Very Satisfied</option>
          <option value="Satisfied">Satisfied</option>
          <option value="Neutral">Neutral</option>
          <option value="Dissatisfied">Dissatisfied</option>
          <option value="Very Dissatisfied">Very Dissatisfied</option>
        </select>
      </div>
      <div className="question">
        <label>Was the waiting time for your appointment reasonable?</label>
        <select name="questionTweleve" value={answers.questionTweleve} onChange={handleInputChange}>
          <option value="">Select option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="question">
        <label>How well did the staff address your concerns?</label>
        <select name="questionThirteen" value={answers.questionThirteen} onChange={handleInputChange}>
          <option value="">Select option</option>
          <option value="Very Well">Very Well</option>
          <option value="Well">Well</option>
          <option value="Average">Average</option>
          <option value="Poor">Poor</option>
          <option value="Very Poor">Very Poor</option>
        </select>
      </div>
      <div className="question">
        <label>How likely are you to recommend our services to others?</label>
        <select name="questionFouteen" value={answers.questionFouteen} onChange={handleInputChange}>
          <option value="">Select option</option>
          <option value="Very Likely">Very Likely</option>
          <option value="Likely">Likely</option>
          <option value="Neutral">Neutral</option>
          <option value="Unlikely">Unlikely</option>
          <option value="Very Unlikely">Very Unlikely</option>
        </select>
      </div>
      <div className="question">
        <label>Did you experience any difficulties in scheduling your appointment?</label>
        <select name="questionFifteen" value={answers.questionFifteen} onChange={handleInputChange}>
          <option value="">Select option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <button className='tb' onClick={handleSubmit}>
        Next
      </button>
      <Toaster />
    </div>
  );
};

export default Page4;