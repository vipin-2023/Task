import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import "./formPage.css";
import FormInput from "../../components/formInput/FormInput";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/button/Button";
import axios from "axios";

const FormPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const params = useParams<{ username: string }>();

  const { username } = params;
  const paramName: string = username as string;

  const urlEndPoint = `http://localhost:8080/forms/${paramName}`;
  const urlPostEndPoint = `http://localhost:8080/forms`;

  interface UserData {
    username: string;
    name: string;
    email: string;
    phoneNumber: string;
    dob: string;
  }

  const [values, setValues] = useState<UserData>({
    username: paramName,
    name: "",
    email: "",
    phoneNumber: "",
    dob: "",
  });

  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await axios.get<UserData>(urlEndPoint);
        const data = response.data;

        if (data) {
          setValues(data);
          setIsDataFetched(true);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {

      setValues({ ...values, [e.target.name]: e.target.value });

  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (isDataFetched) {
      try {
        await axios.put(urlEndPoint, values);
        navigate("/result");
      } catch (error) {
        console.error("Error updating data:", error);
      }
    } else {
      try {
        await axios.post(urlPostEndPoint, values);
        navigate("/result");
      } catch (error) {
        console.error("Error creating data:", error);
      }
    }
    setIsLoading(false);
  };

  const handleCancel = () => {
    setValues({
      username: "",
      name: "",
      email: "",
      phoneNumber: "",
      dob: "",
    });
    navigate("/");
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Create</h1>
        <FormInput
          label="Name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleInputChange}
          required
          errorMessage="some error"
          id={1}
        />
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleInputChange}
          required
          errorMessage="some error"
          pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
          id={2}
        />
        <FormInput
          label="Phone Number"
          name="phoneNumber"
          type="tel"
          value={values.phoneNumber}
          onChange={handleInputChange}
          required
          pattern="^[0-9]{10}$"
          id={3}
        />
        <FormInput
          label="Date of Birth"
          name="dob"
          type="date"
          value={values.dob}
          onChange={handleInputChange}
          required
          id={4}
        />
        <div className="button-group">
          <Button
            type="button"
            isFilled={false}
            onClick={handleCancel}
            text={"Cancel"}
          />
          <Button text="Submit" type="submit" isFilled={true} isShining={isLoading}  />
        </div>
      </form>
    </div>
  );
};

export default FormPage;
