import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import SuccessImg from "../../assets/images/success.png";
import "./resultPage.css";
import ConfettiExplosion from 'react-confetti-explosion';


const ResultPage: React.FC = () => {
  const [isExploding, setIsExploding] = React.useState(false);
  const navigate = useNavigate();
  useEffect(()=>{
    setIsExploding(true);
  })

  const handleReturnHome = () => {
    navigate("/");
  };

  return (
    <div className="result-canvas">
      {isExploding && <  ConfettiExplosion particleCount={250} width={1300} force={.8} duration={5200} />}
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
