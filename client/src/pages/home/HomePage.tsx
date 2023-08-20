import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./homePage.css";
import homeImage from "../../assets/images/baloon.png";
import Button from "../../components/button/Button";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (username !== "") {
      navigate(`/form/${username}`);
    } else {
      setError(true);
    }
  };

  return (
    <div className="canvas">
      <div className="wrapper">
        <img className="home-image" src={homeImage} alt="img" />
        <div className="home-interation">
          <label htmlFor=" text">User name</label>
          <input
            className={error ? "username-field-error" : "username-field"}
            type="text"
            placeholder="@Hannbi"
            value={username}
            onChange={(e) => setUsername(e.target.value)}/>
          <Button text={"Start"} onClick={handleSubmit} />

        </div>
      </div>
    </div>
  );
};

export default HomePage;
