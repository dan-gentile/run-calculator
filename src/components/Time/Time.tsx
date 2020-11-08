import React, { useState } from "react";
import InputMaskField from "../InputMaskField/InputMaskField";
import "./Time.scss";

export default function Time() {
  const [inputTimeState, setInputTimeState] = useState("");

  const onChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputTimeState(event.target.value);
  };

  return (
    <div className="Time">
      <InputMaskField
        name="Time"
        mask="99:99:99"
        placeholder="00:00:00"
        value={inputTimeState}
        onChange={onChange}
      />
    </div>
  );
}
