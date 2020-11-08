import React from "react";
import Form from "./sections/form/Form";
import Logo from "./sections/logo/Logo";
import Results from "./sections/results/Results";
import "./App.scss";

export default function App() {
  return (
    <main>
      <Logo />
      <Form />
      <Results />
    </main>
  );
}
