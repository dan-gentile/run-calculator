import React from "react";
import "./InputField.scss";

interface InputFieldProps {
  name: string;
  pattern?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField(props: InputFieldProps) {
  return (
    <div className="InputField">
      <label htmlFor={props.name}>{props.name}</label>
      <input className="Input" {...props} />
    </div>
  );
}
