import { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/Description";
import Feedback from "./components/Feedback";
import Options from "./components/Options";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = JSON.parse(localStorage.getItem('feedback'));
    return savedFeedback || { good: 0, neutral: 0, bad: 0 };
  });

  
  const total = Object.values(feedback).reduce((sum,value) => sum + value, 0)
 
  
  const handleOptionClick = (option) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };

  const resetAll = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

 useEffect(() => {
  localStorage.setItem('feedback', JSON.stringify(feedback));
 },[feedback])

  return (
    <>
      <Description />
      <Options onOptionClick={handleOptionClick} onReset={resetAll} total={total}/>
      <Feedback feedback={feedback} total={total}/>
    </>
  );
}

export default App;
