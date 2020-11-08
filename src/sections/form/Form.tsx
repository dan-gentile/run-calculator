import React from "react";
import Distance from "../../components/Distance/Distance";
import RaceType from "../../components/RaceType/RaceType";
import Time from "../../components/Time/Time";
import "./Form.scss";

export default function Form() {
  return (
    <form className="Form">
      <Time />
      <RaceType />
      <Distance />
      <button className="btn">Submit!</button>
    </form>
  );
}
