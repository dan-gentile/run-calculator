import React, { useState } from "react";
import InputMaskField from "../../components/InputMaskField/InputMaskField";
import "./Form.scss";
import Button from "../../components/Button/Button";
import SelectField from "../../components/SelectField/SelectField";

export default function Form() {
  const [inputTimeState, setInputTimeState] = useState("");
  const [inputDistanceState, setInputDistanceState] = useState("");
  const [unitsSelectState, setUnitsSelectState] = useState("mi");

  const onInputTimeChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputTimeState(event.target.value);
  };

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
    <form className="Form">
      <div className="Time">
        <InputMaskField
          name="Time"
          mask="99:99:99"
          placeholder="00:00:00"
          value={inputTimeState}
          onChange={onInputTimeChange}
        />
      </div>
      <div className="RaceType"></div>
      <div className="Distance">
        <InputMaskField
          name="Distance"
          mask="999.99"
          placeholder="0.00"
          value={inputDistanceState}
          onChange={onInputDistanceChange}
        />
        <SelectField
          value={unitsSelectState}
          onChange={onSelectStateChange}
          label="units"
          optionValue={["meters", "km", "mi"]}
        />
      </div>
      <Button />
    </form>
  );
}
