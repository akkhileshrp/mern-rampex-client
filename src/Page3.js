import React, { useState } from 'react';
import './Components/Page3.css'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const Page3 = () => {
  const [answers, setAnswers] = useState({
    questionSix: "",
    questionSeven: "",
    questionEight: "",
    questionNine: "",
    questionTen: "",
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
    fetch("http://localhost:8000/feedback/page3", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(answers)
    })
      .then((response) => {
        if (response.ok) {
          successMessage();
          setAnswers({
            questionSix: "",
            questionSeven: "",
            questionEight: "",
            questionNine: "",
            questionTen: "",
          })
          navigate("/page4");
        } else errorMessage();
        return response.json();
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="page3-container">
      <h2>Feedback Form Page-3</h2>
      <div className="question">
        <p>How satisfied are you with the treatment you received?</p>
        <select
          onChange={handleInputChange}
          name='questionSix'
          value={answers.questionSix}
        >
          <option value="" hidden>Select Option</option>
          <option value="Very Dissatisfied">Very Dissatisfied</option>
          <option value="Dissatisfied">Dissatisfied</option>
          <option value="Neutral">Neutral</option>
          <option value="Satisfied">Satisfied</option>
          <option value="Very Satisfied">Very Satisfied</option>
        </select>
      </div>
      <div className="question">
        <p>Were your concerns addressed by the healthcare provider?</p>
        <select
          name='questionSeven'
          value={answers.questionSeven}
          onChange={handleInputChange}
        >
          <option value="" hidden>Select Option</option>
          <option value="Not at all">Not at all</option>
          <option value="Slightly">Slightly</option>
          <option value="Moderately">Moderately</option>
          <option value="Mostly">Mostly</option>
          <option value="Completely">Completely</option>
        </select>
      </div>
      <div className="question">
        <p>How satisfied were you with the overall communication with the healthcare provider?</p>
        <select
          onChange={handleInputChange}
          name='questionEight'
          value={answers.questionEight}
        >
          <option value="" hidden>Select Option</option>
          <option value="Not at all">Not at all</option>
          <option value="Slightly">Slightly</option>
          <option value="Moderately">Moderately</option>
          <option value="Mostly">Mostly</option>
          <option value="Completely">Completely</option>
        </select>
      </div>
      <div className="question">
        <p>How would you rate the explanation of your treatment plan by the healthcare provider?</p>
        <select
          onChange={handleInputChange}
          value={answers.questionNine}
          name='questionNine'
        >
          <option value="" hidden>Select Option</option>
          <option value="Not at all">Not at all</option>
          <option value="Slightly">Slightly</option>
          <option value="Moderately">Moderately</option>
          <option value="Mostly">Mostly</option>
          <option value="Completely">Completely</option>
        </select>
      </div>
      <div className="question">
        <p>Were you comfortable discussing your medical history with the healthcare provider?</p>
        <select
          onChange={handleInputChange}
          value={answers.questionTen}
          name='questionTen'
        >
          <option value="" hidden>Select Option</option>
          <option value="Not at all">Not at all</option>
          <option value="Slightly">Slightly</option>
          <option value="Moderately">Moderately</option>
          <option value="Mostly">Mostly</option>
          <option value="Completely">Completely</option>
        </select>
      </div>
      <button className='tb' onClick={handleSubmit}>
        Next
      </button>
      <Toaster />
    </div>
  );
};

export default Page3;