import React, { useState } from "react";
import InputMaskField from "../InputMaskField/InputMaskField";
import "./Distance.scss";

export default function Distance() {
  const [inputDistanceState, setInputDistanceState] = useState("");
  const [unitsSelectState, setUnitsSelectState] = useState("mi");

  const onInputDistanceChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputDistanceState(event.target.value);
  };

  const onSelectStateChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setUnitsSelectState(event.target.value);
  };

  return (
    <div className="Distance">
      <InputMaskField
        name="Distance"
        mask="999.99"
        placeholder="0.00"
        value={inputDistanceState}
        onChange={onInputDistanceChange}
      />

      <div className="select">
        <label htmlFor="units">Units</label>
        <select
          id="units"
          value={unitsSelectState}
          onChange={onSelectStateChange}
        >
          <option value="meters">meters</option>
          <option value="km">km</option>
          <option value="mi">mi</option>
        </select>
      </div>
    </div>
  );
}
