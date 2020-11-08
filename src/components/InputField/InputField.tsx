import React from "react";
import "./InputField.scss";

interface InputProps {
  name: string;
  type: string;
}

export default function InputField({ name, type }: InputProps) {
  return (
    <div className="InputField">
      <label htmlFor={name}>{name}:</label>
      <input
        name={name}
        type={type}
        className="input"
        placeholder={name}
        id={name}
      />
    </div>
  );
}
