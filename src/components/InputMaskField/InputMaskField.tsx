import React from "react";
import "./InputMaskField.scss";
import InputMask from "react-input-mask";

interface InputMaskFieldProps {
  name: string;
  mask: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputMaskField({
  name,
  mask,
  placeholder,
  value,
  onChange,
}: InputMaskFieldProps) {
  return (
    <div className="InputMaskField">
      <label htmlFor={name}>{name}</label>
      <InputMask
        className="InputMask"
        mask={mask}
        placeholder={placeholder}
        maskChar={null}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
