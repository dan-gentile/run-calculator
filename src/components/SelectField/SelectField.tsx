import React from "react";
import "./SelectField.scss";

interface SelectFieldProps {
  value: string;
  label: string;
  optionValue: Array<string>;
  onChange: ((event: React.ChangeEvent<HTMLSelectElement>) => void) | undefined;
}

export default function SelectField({
  value,
  label,
  optionValue,
  onChange,
}: SelectFieldProps) {
  return (
    <div className="select-field">
      <label htmlFor={label}>{label}</label>
      <select className={label} value={value} onChange={onChange}>
        {optionValue.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}
