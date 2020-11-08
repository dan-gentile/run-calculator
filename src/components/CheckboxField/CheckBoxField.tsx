import React from "react";
import "./CheckBoxField.scss";

interface CheckBoxFieldProps {
  name: string;
  label: string;
  value: Array<string>;
  isChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CheckBoxField({
  name,
  label,
  value,
  isChecked,
  onChange,
}: CheckBoxFieldProps) {
  return (
    <div className="CheckBoxField">
      <label htmlFor={name}>
        {label}
        <input
          type="checkbox"
          name={name}
          value={value}
          checked={isChecked}
          onChange={onChange}
        ></input>
      </label>
    </div>
  );
}
