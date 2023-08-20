import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import "./formPage.css";
import FormInput from "../../components/formInput/FormInput";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/button/Button";
import axios from "axios";

const FormPage: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams<{ username: string }>();
  const { username } = params;
<<<<<<< HEAD
  console.log("Username:", username);
  const urlEndPoint = `http://localhost:3000/forms/${username}`;

  interface UserData {
    name: string;
    email: string;
    phoneNumber: string;
    dateOfBirth: string;
  }

  const [values, setValues] = useState<UserData>({
    name: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
=======
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
>>>>>>> b9b9a9d (semi final)
  });
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
<<<<<<< HEAD
    // Fetch data using axios
=======
>>>>>>> b9b9a9d (semi final)
    const fetchData = async () => {
      try {
        const response = await axios.get<UserData>(urlEndPoint);
        const data = response.data;
<<<<<<< HEAD
        // Set the fetched data to the state
=======

>>>>>>> b9b9a9d (semi final)
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
<<<<<<< HEAD
    setValues({ ...values, [e.target.name]: e.target.value });
=======
    if (e.target.name === "dob") {
      const [day, month, year] = e.target.value.split("/");
      const formattedDate = `${year}-${month}-${day}`;
      setValues({ ...values, [e.target.name]: formattedDate });
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
    }
>>>>>>> b9b9a9d (semi final)
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (isDataFetched) {
<<<<<<< HEAD
      // Update existing data on the server
=======
>>>>>>> b9b9a9d (semi final)
      try {
        await axios.put(urlEndPoint, values);
        navigate("/result");
      } catch (error) {
        console.error("Error updating data:", error);
      }
    } else {
<<<<<<< HEAD
      // Create new data on the server
      try {
        await axios.post(urlEndPoint, values);
=======
      try {
        await axios.post(urlPostEndPoint, values);
>>>>>>> b9b9a9d (semi final)
        navigate("/result");
      } catch (error) {
        console.error("Error creating data:", error);
      }
    }
  };

  const handleCancel = () => {
    setValues({
<<<<<<< HEAD
      name: "",
      email: "",
      phoneNumber: "",
      dateOfBirth: "",
=======
      username: "",
      name: "",
      email: "",
      phoneNumber: "",
      dob: "",
>>>>>>> b9b9a9d (semi final)
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
<<<<<<< HEAD
          name="dateOfBirth"
          type="date"
          value={values.dateOfBirth}
=======
          name="dob"
          type="date"
          value={values.dob}
>>>>>>> b9b9a9d (semi final)
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
<<<<<<< HEAD

=======
>>>>>>> b9b9a9d (semi final)
          <Button type="submit" text={"Submit"} />
        </div>
      </form>
    </div>
  );
};

export default FormPage;
