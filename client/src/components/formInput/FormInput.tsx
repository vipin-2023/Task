import React, { useState, ChangeEvent } from "react";
import "./formInput.css";

interface FormInputProps {
  label: string;
  errorMessage?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  id: number;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  pattern?: string;
  value: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  errorMessage,
  onChange,
  id,
  name,
  type,
  placeholder,
  required,
  pattern,
  value,
}) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <div className={`formInput ${focused ? "focused" : ""}`}>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        id={id.toString()}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
