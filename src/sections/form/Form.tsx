import React, { useState } from "react";
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";
import SelectField from "../../components/SelectField/SelectField";
import CheckBoxField from "../../components/CheckboxField/CheckBoxField";
import "./Form.scss";

export default function Form() {
  const [inputTimeState, setInputTimeState] = useState("");
  const [inputDistanceState, setInputDistanceState] = useState("");
  const [unitsSelectState, setUnitsSelectState] = useState("mi");
  const [checkBoxState, setCheckboxState] = useState({
    marathon: false,
    halfMarathon: false,
    tenKm: false,
    fiveKm: false,
  });

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

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked === true) {
      switch (event.target.name) {
        case "marathon":
          setCheckboxState({
            halfMarathon: false,
            tenKm: false,
            fiveKm: false,
            marathon: true,
          });
          break;
        case "halfMarathon":
          setCheckboxState({
            tenKm: false,
            fiveKm: false,
            marathon: false,
            halfMarathon: true,
          });
          break;
        case "tenKm":
          setCheckboxState({
            fiveKm: false,
            marathon: false,
            halfMarathon: false,
            tenKm: true,
          });
          break;
        default:
          setCheckboxState({
            marathon: false,
            halfMarathon: false,
            tenKm: false,
            fiveKm: true,
          });
      }
      const valueArr = event.target.value.split(",");
      setInputDistanceState(valueArr[0]);
      setUnitsSelectState(valueArr[1]);
    } else {
      setCheckboxState({
        marathon: false,
        halfMarathon: false,
        tenKm: false,
        fiveKm: false,
      });
      setInputDistanceState("");
      setUnitsSelectState("mi");
    }
  };

  return (
    <form className="Form">
      <div className="Time">
        <InputField
          name="Time"
          pattern="[0-9:.]*"
          placeholder="00:00:00"
          value={inputTimeState}
          onChange={onInputTimeChange}
        />
      </div>
      <div className="RaceType">
        <CheckBoxField
          name="marathon"
          value={["26.2", "mi"]}
          label="Marathon"
          isChecked={checkBoxState.marathon}
          onChange={handleOnChange}
        />
        <CheckBoxField
          name="halfMarathon"
          value={["13.1", "mi"]}
          label="Half Marathon"
          isChecked={checkBoxState.halfMarathon}
          onChange={handleOnChange}
        />
        <CheckBoxField
          name="tenKm"
          value={["10.00", "km"]}
          label="10km"
          isChecked={checkBoxState.tenKm}
          onChange={handleOnChange}
        />
        <CheckBoxField
          name="fiveKm"
          value={["05.00", "km"]}
          label="5km"
          isChecked={checkBoxState.fiveKm}
          onChange={handleOnChange}
        />
      </div>
      <div className="Distance">
        <InputField
          name="Distance"
          pattern="[0-9.]*"
          placeholder="0.00"
          value={inputDistanceState}
          onChange={onInputDistanceChange}
        />
        <SelectField
          value={unitsSelectState}
          onChange={onSelectStateChange}
          label="Units"
          optionValue={["km", "mi"]}
        />
      </div>
      <Button className="btn" name="Submit" type="submit" />
    </form>
  );
}
