import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import SuccessImg from "../../assets/images/success.png";
import "./resultPage.css";

const ResultPage: React.FC = () => {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate("/");
  };

  return (
    <div className="result-canvas">
      <div className="result-wrapper">
        <h1>Successfully!</h1>
        <img id="successImg" src={SuccessImg} alt="" />
        <p>Your form submission has been received !</p>
        <Button text="Home" onClick={handleReturnHome} />
      </div>
    </div>
  );
};

export default ResultPage;
